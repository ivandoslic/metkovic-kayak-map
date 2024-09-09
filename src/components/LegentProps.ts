import { LatLngLiteral } from 'leaflet';

export interface LegendProps {
  isOpen: boolean;
  toggleLegend: () => void;
  destination: LatLngLiteral | null;
  onExitNav: () => void;
}
