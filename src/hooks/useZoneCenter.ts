import { useMemo } from 'react';
import { LatLngExpression } from 'leaflet';
import { calculateCenter } from '../utils/mapUtils';

export const useZoneCenter = (coords: LatLngExpression[]): LatLngExpression => {
  return useMemo(() => calculateCenter(coords), [coords]);
};
