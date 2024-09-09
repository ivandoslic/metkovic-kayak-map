import { LatLngExpression, LatLngLiteral } from 'leaflet';

export interface MapZoneProps {
  zoneData: ZoneData;
  onClick: (zone: ZoneData) => void;
}

export interface ZoneData {
  id: number;
  name: string;
  bounds: LatLngExpression[];
  icon?: IconProps;
  description: string;
  enterance: LatLngLiteral;
  type: ZoneType;
}

interface IconProps {
  iconUrl: string;
  iconSize: number[];
}

export enum ZoneType {
  RESTRICTED = 'RESTRICTED',
  PORTAGE = 'PORTAGE',
  PONTOONS = 'PONTOONS',
  PARAATHLETSRAMP = 'PARA-ATHLETS-RAMP',
  PHOTOGRAPHERS = 'PHOTOGRAPHERS',
  MIXED = 'MIXED',
}
