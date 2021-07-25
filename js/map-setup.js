import{createSimilarElement} from './generate-similar-offers.js';

const offerAddressInput = document.querySelector('#address');

let offerMap = null;

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const offerPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68346,
    lng: 139.76987,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

export const renderMap = (callback) => {
  offerMap =  L.map('map-canvas')
    .on('load', () => {
      callback;
    })
    .setView({
      lat: 35.68346,
      lng: 139.76987,
    }, 10);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(offerMap);
  mainPinMarker.addTo(offerMap);
  offerAddressInput.value = `Широта: ${mainPinMarker.getLatLng().lat}, долгота: ${mainPinMarker.getLatLng().lat}`;
  mainPinMarker.on('moveend', () => {
    offerAddressInput.value = `Широта: ${mainPinMarker.getLatLng().lat.toFixed(5)}, долгота: ${mainPinMarker.getLatLng().lat.toFixed(5)}`;
  });
};

export const renderMarkers = ((data) => {
  data.forEach((item) => {
    const {location} = item;
    const offerPinMarker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: offerPinIcon,
      },
    );
    const {author, offer} = item;
    offerPinMarker.addTo(offerMap).bindPopup(createSimilarElement(author, offer));
  });
});
