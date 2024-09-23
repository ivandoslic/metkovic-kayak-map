import React, { useEffect, useState } from 'react';
import { NavigationControlProps } from './NavigationControl.types';
import { useMap } from 'react-leaflet';
import L, { LatLngLiteral } from 'leaflet';
import 'leaflet-routing-machine';

const NavigationControl: React.FC<NavigationControlProps> = ({
  destination,
  userLocation,
  followUser,
}) => {
  const map = useMap();
  const [lastChecked, setLastChecked] = useState<number | null>(null);
  const [currentRControl, setCurrentRControl] =
    useState<L.Routing.Control | null>(null);

  const [semaphore, setSemaphore] = useState(true);
  const [lastDestination, setLastDestination] = useState<LatLngLiteral | null>(
    null
  );

  useEffect(() => {
    if (!userLocation) {
      console.warn('User location is not available!');
      if (currentRControl) map.removeControl(currentRControl);
      return;
    }

    if (!destination) {
      console.warn('Destination zone not set!');
      if (currentRControl) map.removeControl(currentRControl);
      return;
    }

    if (
      (currentRControl &&
        lastChecked &&
        Date.now() - lastChecked < 30000 &&
        destination === lastDestination) ||
      !semaphore
    ) {
      return;
    }

    setLastChecked(Date.now());
    setLastDestination(destination);
    setSemaphore(false);

    const noDraggingPlanOptions = {
      addWaypoints: false,
      draggableWaypoints: false,
      createMarker: function () {
        return false;
      },
      followUser: followUser,
    };

    const noDraggingPlan = new L.Routing.Plan(
      [L.latLng(userLocation), L.latLng(destination)],
      noDraggingPlanOptions
    );

    if (currentRControl) map.removeControl(currentRControl);

    const routingControl = L.Routing.control({
      plan: noDraggingPlan,
      lineOptions: {
        styles: [{ weight: 4, className: 'animate-line' }],
        extendToWaypoints: true,
        missingRouteTolerance: 0,
      },
      show: false,
      addWaypoints: false,
      routeWhileDragging: true,
      fitSelectedRoutes: false,
    }).addTo(map);

    setCurrentRControl(routingControl);
    setSemaphore(true);

    return () => {
      console.log('Unmountig');

      if (!destination) map.removeControl(routingControl);
    };
  }, [destination, userLocation]);

  useEffect(() => {
    if (userLocation && followUser) {
      map.flyTo(userLocation, 17);
    }
  }, [userLocation, followUser, map]);

  return null;
};

export default NavigationControl;
