import { Marker, Polygon } from 'react-leaflet';
import { useZoneCenter } from '../hooks/useZoneCenter';
import { MapZoneProps, ZoneType } from './MapZone.types';
import { Icon, PathOptions } from 'leaflet';
import { useEffect, useState } from 'react';
import DiagonalHatchPattern from '../utils/DiagonalHatchPattern';

const MapZone: React.FC<MapZoneProps> = ({ zoneData, onClick }) => {
  const { bounds, icon, type } = zoneData;
  const center = useZoneCenter(bounds);
  const LIcon = new Icon({
    iconUrl: icon ? icon.iconUrl : '',
    iconSize: icon ? [icon.iconSize[0], icon.iconSize[1]] : [0, 0],
  });
  const [mPathOptions, setMPathOptions] = useState<PathOptions | undefined>(
    undefined
  );

  useEffect(() => {
    setMPathOptions(getZoneStyling());
  }, [zoneData]);

  const getZoneStyling = () => {
    if (type === ZoneType.RESTRICTED) {
      return {
        fillColor: 'url(#diagonalHatch)',
        fillOpacity: 0.6,
        stroke: true,
        color: 'red',
      };
    }

    if (type === ZoneType.PARAATHLETSRAMP) {
      return {
        fillColor: 'yellow',
        fillOpacity: 1,
        stroke: true,
        color: 'yellow',
      };
    }

    if (type === ZoneType.PHOTOGRAPHERS) {
      return {
        fillColor: 'aqua',
        fillOpacity: 0.6,
        stroke: true,
        color: 'blue',
      };
    }

    if (type === ZoneType.MIXED) {
      return {
        fillColor: 'fuchsia',
        fillOpacity: 0.9,
        stroke: true,
        color: 'red',
      };
    }

    if (type === ZoneType.PORTAGE) {
      return {
        fillColor: 'orangered',
        fillOpacity: 0.95,
        stroke: false,
        color: 'red',
      };
    }

    if (type === ZoneType.PONTOONS) {
      return {
        fillColor: 'green',
        fillOpacity: 0.95,
        stroke: false,
        color: 'red',
      };
    }

    return {
      fillColor: 'blue', // Example for non-restricted zones
      fillOpacity: 0.4,
      stroke: true,
      color: 'blue',
    };
  };

  return (
    <>
      {type === ZoneType.RESTRICTED && <DiagonalHatchPattern />}

      <Polygon
        positions={bounds}
        eventHandlers={{
          click: () => onClick(zoneData),
        }}
        pathOptions={mPathOptions}
      />
      {icon && (
        <Marker
          position={center}
          icon={LIcon}
          eventHandlers={{
            click: () => onClick(zoneData),
          }}
        >
          {/* <Popup>{name}</Popup> */}
        </Marker>
      )}
    </>
  );
};

export default MapZone;
