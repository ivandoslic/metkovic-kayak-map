import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngLiteral } from 'leaflet';
import MapZone from './components/MapZone';
import UserLocationMarker from './components/UserLocationMarker';
import { useEffect, useState } from 'react';
import NavigationControl from './components/NavigationControl';
import Sidebar from './components/Sidebar';
import zoneData from './data/zones.json';
import entrancesData from './data/entrances.json';
import { ZoneData } from './components/MapZone.types';
import Legend from './components/Legend';

const userIcon: Icon = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=21832&format=png&color=000000',
  iconSize: [42, 42],
  iconAnchor: [24, 42],
  popupAnchor: [-1, -42],
});

const enteranceIcon: Icon = new Icon({
  iconUrl:
    'https://img.icons8.com/?size=100&id=gmkcYylpvKxx&format=png&color=000000',
  iconSize: [24, 24],
});

const startZone: LatLngLiteral = {
  lat: 43.05347671998061,
  lng: 17.653227514163785,
};

function App() {
  const [userLocation, setUserLocation] = useState<LatLngLiteral | null>(null);
  const [lastUpdatedLocation, setLastUpdatedLocation] =
    useState<LatLngLiteral | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [setselectedZone, setSetselectedZone] = useState<ZoneData | null>(null);
  const [destinationZone, setDestinationZone] = useState<LatLngLiteral | null>(
    null
  );
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        destinationZone &&
        userLocation &&
        lastUpdatedLocation !== userLocation
      )
        setLastUpdatedLocation(userLocation);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleLegend = () => {
    setIsLegendOpen((prev) => !prev);
  };

  const handleUserLocationUpdate = (location: LatLngLiteral) => {
    setUserLocation(location);
  };

  const handleZoneClick = (zone: ZoneData) => {
    setIsSidebarOpen(true);
    setSetselectedZone(zone);
  };

  const handleNavigate = (zone: ZoneData) => {
    console.log('Navigating to', zone.name);
    setDestinationZone(zone.enterance);
    setIsSidebarOpen(false);
  };

  return (
    <div className="w-full h-[100dvh]">
      <MapContainer
        className="h-full"
        center={startZone}
        style={{ zIndex: 1 }}
        zoom={21}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {zoneData.map((zone) => (
          <MapZone
            key={zone.id}
            zoneData={zone as ZoneData}
            onClick={handleZoneClick}
          />
        ))}

        {entrancesData.map((entrance) => (
          <Marker position={entrance} icon={enteranceIcon}>
            <Popup>Here's the entrance</Popup>
          </Marker>
        ))}

        <UserLocationMarker
          icon={userIcon}
          onLocationUpdate={handleUserLocationUpdate}
        />

        {userLocation && destinationZone && (
          <NavigationControl
            destination={destinationZone}
            userLocation={lastUpdatedLocation}
          />
        )}
      </MapContainer>

      <Legend isOpen={isLegendOpen} toggleLegend={toggleLegend} />

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        loadedZone={setselectedZone}
        onNavigate={handleNavigate}
      ></Sidebar>
    </div>
  );
}

export default App;
