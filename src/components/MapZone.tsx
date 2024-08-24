import { Marker, Polygon, Popup } from 'react-leaflet';
import { useZoneCenter } from '../hooks/useZoneCenter';
import { MapZoneProps } from './MapZone.types';

const MapZone: React.FC<MapZoneProps> = ({ zoneBounds, zoneName, icon }) => {
  const center = useZoneCenter(zoneBounds);

  return (
    <>
      <Polygon positions={zoneBounds} />
      <Marker position={center} icon={icon}>
        <Popup>{zoneName}</Popup>
      </Marker>
    </>
  );
};

export default MapZone;
