import { LatLngLiteral } from 'leaflet';

export interface NavigationControlProps {
  destination: LatLngLiteral | null;
  userLocation: LatLngLiteral | null;
}
