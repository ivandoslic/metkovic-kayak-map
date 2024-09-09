import React, { useEffect } from 'react';
import { NavigationControlProps } from './NavigationControl.types';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

const NavigationControl: React.FC<NavigationControlProps> = ({
  destination,
  userLocation,
}) => {
  const map = useMap();

  useEffect(() => {
    if (destination) console.log(JSON.stringify(destination));

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

    return () => {
      map.removeControl(routingControl);
    };
  }, [destination, userLocation, map]);

  return null;
};

export default NavigationControl;
