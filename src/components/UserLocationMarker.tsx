import { UserLocationMarkerProps } from './UserLocationMarkerProps.types';
import { Icon, LatLngLiteral } from 'leaflet';
import { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

const defaultIcon = new Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const UserLocationMarker: React.FC<UserLocationMarkerProps> = ({
  enableTracking = true,
  icon = defaultIcon,
  snapUserToCenter = false,
  onLocationUpdate,
}) => {
  const [position, setPosition] = useState<LatLngLiteral | null>(null);
  const map = useMap();

  useEffect(() => {
    if (!enableTracking || !navigator.geolocation) {
      console.warn(
        "We can't track your location because it is either disabled or your browser doesn't support geolocation!"
      );
      return;
    }

    const successHandler = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      const newPos: LatLngLiteral = { lat: latitude, lng: longitude };
      setPosition(newPos);

      if (snapUserToCenter) {
        map.flyTo(newPos, map.getZoom());
      }

      if (onLocationUpdate) {
        onLocationUpdate(newPos);
      }
    };

    const errorHandler = (error: GeolocationPositionError) => {
      console.error('Geolocation error: ', error.message);
    };

    const watchId = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [enableTracking, snapUserToCenter, map]);

  return position ? (
    <Marker position={position} icon={icon}>
      {' '}
      <Popup>This is you!</Popup>{' '}
    </Marker>
  ) : null;
};

export default UserLocationMarker;
