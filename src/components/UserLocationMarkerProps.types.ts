import { Icon, LatLngLiteral } from 'leaflet';

export interface UserLocationMarkerProps {
  enableTracking?: boolean;
  icon?: Icon;
  snapUserToCenter?: boolean;
  onLocationUpdate?: (location: LatLngLiteral) => void;
}
