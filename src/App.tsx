import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngLiteral } from 'leaflet';
import MapZone from './components/MapZone';
import UserLocationMaker from './components/UserLocationMarker';

const testCoords: LatLngLiteral[] = [
  {
    lat: 43.05536544037712,
    lng: 17.65269772460676,
  },
  {
    lat: 43.05495760195089,
    lng: 17.653856809264965,
  },
  {
    lat: 43.055310761475546,
    lng: 17.6543607246067,
  },
  {
    lat: 43.05567124211662,
    lng: 17.65277308042953,
  },
];

const foodZoneIcon: Icon = new Icon({
  iconUrl:
    'https://img.icons8.com/?size=100&id=NCfa1GveXLXl&format=png&color=000000',
  iconSize: [48, 48],
});

const testCoords2: LatLngLiteral[] = [
  {
    lat: 43.05453928232848,
    lng: 17.650829266935805,
  },
  {
    lat: 43.05468824425307,
    lng: 17.65008853810035,
  },
  {
    lat: 43.054351122534555,
    lng: 17.650196199467363,
  },
  {
    lat: 43.05406876465109,
    lng: 17.65063608042945,
  },
  {
    lat: 43.0541472454289,
    lng: 17.65130108042946,
  },
];

const gearIcon: Icon = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=15136&format=png&color=000000',
  iconSize: [48, 48],
});

const userIcon: Icon = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=21832&format=png&color=000000',
  iconSize: [42, 42],
});

function App() {
  return (
    <div className="w-full h-[100dvh]">
      <MapContainer
        className="h-full"
        center={[43.05394292527192, 17.648376911112972]}
        style={{ zIndex: 1 }}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapZone
          zoneBounds={testCoords}
          zoneName="Food zone"
          icon={foodZoneIcon}
        />
        <MapZone
          zoneBounds={testCoords2}
          zoneName="Gear zone"
          icon={gearIcon}
        />
        <UserLocationMaker icon={userIcon} />
      </MapContainer>
    </div>
  );
}

export default App;
