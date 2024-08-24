import { LatLngExpression, Icon } from 'leaflet';

export interface MapZoneProps {
  zoneBounds: LatLngExpression[];
  zoneName: string;
  icon: Icon;
  // TODO: Add background color modifier
}
