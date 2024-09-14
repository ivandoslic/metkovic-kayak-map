import { type ZoneData, ZoneType } from '../components/MapZone.types';

export const openingZone: ZoneData = {
  id: 16,
  name: 'Opening Ceremony',
  bounds: [
    {
      lat: 43.05369973071342,
      lng: 17.65223253756097,
    },
  ],
  enterance: {
    lat: 43.05369973071342,
    lng: 17.65223253756097,
  },
  icon: {
    iconUrl:
      'https://img.icons8.com/?size=100&id=YsrwlOeUydf5&format=png&color=000000',
    iconSize: [42, 42],
  },
  description: 'Opening ceremony and accreditation zone',
  type: ZoneType.MIXED,
};

export const accreditationZone: ZoneData = {
  id: 17,
  name: 'Accreditation center',
  bounds: [
    {
      lat: 43.05369973071342,
      lng: 17.65223253756097,
    },
  ],
  enterance: {
    lat: 43.05369973071342,
    lng: 17.65223253756097,
  },
  icon: {
    iconUrl:
      'https://img.icons8.com/?size=100&id=FWBQ4WCRES6I&format=png&color=000000',
    iconSize: [42, 42],
  },
  description: 'Accreditation zone',
  type: ZoneType.MIXED,
};

export const infopointZone: ZoneData = {
  id: 18,
  name: 'Info Point',
  bounds: [
    {
      lat: 43.054455,
      lng: 17.650584,
    },
  ],
  enterance: {
    lat: 43.054455,
    lng: 17.650584,
  },
  icon: {
    iconUrl:
      'https://img.icons8.com/?size=100&id=63308&format=png&color=000000',
    iconSize: [32, 32],
  },
  description:
    'Need any information? Come here to info-point! We are waiting and will be at your service.',
  type: ZoneType.MIXED,
};

export const officialsPointZone: ZoneData = {
  id: 19,
  name: 'Officials',
  bounds: [
    {
      lat: 43.054264,
      lng: 17.649833,
    },
  ],
  enterance: {
    lat: 43.054264,
    lng: 17.649833,
  },
  icon: {
    iconUrl: '/num1.png',
    iconSize: [32, 32],
  },
  description: 'Zone for event officials and staff.',
  type: ZoneType.RESTRICTED,
};

export const mediaPointZone: ZoneData = {
  id: 20,
  name: 'Media zone',
  bounds: [
    {
      lat: 43.054137,
      lng: 17.649782,
    },
  ],
  enterance: {
    lat: 43.054137,
    lng: 17.649782,
  },
  icon: {
    iconUrl: '/num5.png',
    iconSize: [32, 32],
  },
  description: 'Media zone',
  type: ZoneType.RESTRICTED,
};

export const cateringPointZone: ZoneData = {
  id: 21,
  name: 'Catering for teams',
  bounds: [
    {
      lat: 43.05401,
      lng: 17.649731,
    },
  ],
  enterance: {
    lat: 43.054137,
    lng: 17.649782,
  },
  icon: {
    iconUrl: '/letterC.png',
    iconSize: [32, 32],
  },
  description: 'Catering for teams',
  type: ZoneType.RESTRICTED,
};
