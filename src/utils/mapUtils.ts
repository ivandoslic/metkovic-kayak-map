import { LatLng, LatLngExpression, LatLngLiteral } from 'leaflet';

export const calculateCenter = (
  coords: LatLngExpression[]
): LatLngExpression => {
  const latSum = coords.reduce(
    (sum, coord) => sum + toLatLngLiteral(coord).lat,
    0
  );
  const lngSum = coords.reduce(
    (sum, coord) => sum + toLatLngLiteral(coord).lng,
    0
  );

  return {
    lat: latSum / coords.length,
    lng: lngSum / coords.length,
  };
};

function toLatLngLiteral(latLng: LatLngExpression): LatLngLiteral {
  if (latLng instanceof LatLng) {
    return { lat: latLng.lat, lng: latLng.lng, alt: latLng.alt };
  } else if (Array.isArray(latLng)) {
    return { lat: latLng[0], lng: latLng[1], alt: latLng[2] };
  } else {
    return latLng; // already a LatLngLiteral
  }
}
