import{setFormEnabled} from './ad-form.js';
import{similarOffers} from './generate-template-data.js';
import{createSimilarElement} from './generate-similar-offers.js';

const offerAddressInput = document.querySelector('#address');

const offerMap =  L.map('map-canvas')
  .on('load', () => {
    setFormEnabled('map__filters', 'fieldset');
    setFormEnabled('ad-form', 'fieldset');
  })
  .setView({
    lat: 35.68346,
    lng: 139.76987,
  }, 10);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(offerMap);


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

const renderMarkers = ((data) => {
  const {location} = data;
  const offerPinMarker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: offerPinIcon,
    },
  );
  const {author, offer} = data;
  offerPinMarker.addTo(offerMap).bindPopup(createSimilarElement(author, offer));
});

mainPinMarker.addTo(offerMap);
offerAddressInput.value = mainPinMarker.getLatLng();

mainPinMarker.on('moveend', (evt) => {
  offerAddressInput.value = evt.target.getLatLng();
});

similarOffers.forEach((similarOffer) => {
  renderMarkers(similarOffer);
});
