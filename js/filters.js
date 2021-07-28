import { createMarkers } from './map.js';
import { debounce } from './util.js';

const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const housingTypeSelect = document.querySelector('#housing-type');
const housingPriceSelect = document.querySelector('#housing-price');
const housingRoomsSelect = document.querySelector('#housing-rooms');
const housingGuestsSelect = document.querySelector('#housing-guests');
const featuresCheckbox = document.querySelectorAll('.map__checkbox');

const filters = {
  type: 'any',
  price: 'any',
  rooms: 'any',
  guests: 'any',
  features: [],
};

let allproperties = [];

const renderMarkers = (properties) => {
  allproperties = properties;
  createMarkers(allproperties);
};

const getFilteredproperties = () => {
  const filteredproperties = allproperties
    .filter((property) => {
      if (filters.type === 'any') {
        return true;
      }

      return property.offer.type === filters.type;
    })
    .filter((property) => {
      if (filters.price === 'any') {
        return true;
      }

      if (filters.price === 'low') {
        return property.offer.price < LOW_PRICE;
      }

      if (filters.price === 'high') {
        return property.offer.price > HIGH_PRICE;
      }

      return property.offer.price >= LOW_PRICE && property.offer.price <= HIGH_PRICE;
    })
    .filter((property) => {
      if (filters.rooms === 'any') {
        return true;
      }

      return property.offer.rooms === Number(filters.rooms);
    })
    .filter((property) => {
      if (filters.guests === 'any') {
        return true;
      }

      return property.offer.guests === Number(filters.guests);
    })
    .filter((property) => {
      if (!filters.features.length) {
        return true;
      }

      if (!property.offer.features) {
        return false;
      }

      for(let index = 0; index <= filters.features.length - 1; index++) {
        if(!property.offer.features.includes(filters.features[index])) {
          return false;
        }
      }

      return true;
    });

  return filteredproperties;
};

const updateMarkers = debounce(() => createMarkers(getFilteredproperties()));

housingTypeSelect.addEventListener('change', (evt) => {
  filters.type = evt.target.value;
  updateMarkers();
});

housingPriceSelect.addEventListener('change', (evt) => {
  filters.price = evt.target.value;
  updateMarkers();
});

housingRoomsSelect.addEventListener('change', (evt) => {
  filters.rooms = evt.target.value;
  updateMarkers();
});

housingGuestsSelect.addEventListener('change', (evt) => {
  filters.guests = evt.target.value;
  updateMarkers();
});

featuresCheckbox.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      filters.features.push(checkbox.value);
    } else {
      filters.features = filters.features.filter((feature) => feature !== checkbox.value);
    }
    updateMarkers();
  });
});

const resetFilters = () => {
  filters.type = 'any';
  filters.price = 'any';
  filters.rooms = 'any';
  filters.guests = 'any';
  filters.features = [];
  updateMarkers();
};

export { renderMarkers, resetFilters };
