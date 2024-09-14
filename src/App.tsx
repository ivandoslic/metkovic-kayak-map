import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngLiteral } from 'leaflet';
import MapZone from './components/MapZone';
import Snackbar from './components/Snackbar';
import UserLocationMarker from './components/UserLocationMarker';
import { useEffect, useState } from 'react';
import NavigationControl from './components/NavigationControl';
import Sidebar from './components/Sidebar';
import zoneData from './data/zones.json';
import entrancesData from './data/entrances.json';
import { ZoneData } from './components/MapZone.types';
import Legend from './components/Legend';
import { userIcon, enteranceIcon } from './utils/icons';
import {
  infopointZone,
  openingZone,
  accreditationZone,
  officialsPointZone,
  mediaPointZone,
  cateringPointZone,
} from './utils/staticZones';

const startZone: LatLngLiteral = {
  lat: 43.054534,
  lng: 17.651278,
};

function App() {
  const [userLocation, setUserLocation] = useState<LatLngLiteral | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [setselectedZone, setSetselectedZone] = useState<ZoneData | null>(null);
  const [destinationZone, setDestinationZone] = useState<LatLngLiteral | null>(
    null
  );
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [isOpeningDay, setIsOpeningDay] = useState(false);
  const [followUser, setFollowUser] = useState(false);

  useEffect(() => {
    const today = new Date();
    const targetDate = new Date('2024-09-16');

    if (
      today.getFullYear() === targetDate.getFullYear() &&
      today.getMonth() === targetDate.getMonth() &&
      today.getDate() === targetDate.getDate()
    ) {
      setIsOpeningDay(true);
    } else {
      setIsOpeningDay(false);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleLegend = () => {
    setIsLegendOpen((prev) => !prev);
  };

  const toggleFollowUser = () => {
    setFollowUser((prev) => !prev);
  };

  const handleUserLocationUpdate = (location: LatLngLiteral) => {
    setUserLocation(location);
  };

  const handleZoneClick = (zone: ZoneData) => {
    setIsSidebarOpen(true);
    setSetselectedZone(zone);
  };

  const exitNav = () => {
    setDestinationZone(null);
  };

  const handleNavigate = (zone: ZoneData) => {
    setDestinationZone(zone.enterance);
    setIsSidebarOpen(false);
  };

  return (
    <div className="w-full h-[100dvh]">
      <MapContainer
        className="h-full"
        center={startZone}
        style={{ zIndex: 1 }}
        zoom={17}
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

        <MapZone
          zoneData={officialsPointZone}
          onClick={handleZoneClick}
        ></MapZone>

        <MapZone zoneData={mediaPointZone} onClick={handleZoneClick}></MapZone>

        <MapZone
          zoneData={cateringPointZone}
          onClick={handleZoneClick}
        ></MapZone>

        {isOpeningDay ? (
          <MapZone zoneData={openingZone} onClick={handleZoneClick} />
        ) : (
          <MapZone zoneData={accreditationZone} onClick={handleZoneClick} />
        )}

        <MapZone zoneData={infopointZone} onClick={handleZoneClick}></MapZone>

        <NavigationControl
          destination={destinationZone}
          userLocation={userLocation}
          followUser={followUser}
        />
      </MapContainer>

      <Legend
        isOpen={isLegendOpen}
        toggleLegend={toggleLegend}
        destination={destinationZone}
        onExitNav={exitNav}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        loadedZone={setselectedZone}
        onNavigate={handleNavigate}
        onUserFollow={toggleFollowUser}
        isFollowing={followUser}
      ></Sidebar>

      <Snackbar />
    </div>
  );
}

export default App;
