import React, { useEffect, useState } from 'react';
import { NavigationControlProps } from './NavigationControl.types';
import { useMap } from 'react-leaflet';
import L, { LatLngLiteral } from 'leaflet';
import 'leaflet-routing-machine';

const NavigationControl: React.FC<NavigationControlProps> = ({
  destination,
  userLocation,
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

    if (!userLocation) {
      console.warn('User location is not available!');
      return;
    }

    if (!destination) {
      console.warn('Destination zone not set!');
      return;
    }

    const noDraggingPlanOptions = {
      addWaypoints: false,
      draggableWaypoints: false,
      createMarker: function () {
        return false;
      },
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
  }, [destination, userLocation]);

  return null;
};

export default NavigationControl;
