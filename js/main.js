import { deactivateApp } from './deactivate-app.js';
import { activateAdForm, activateMapForm, setAdFormSubmit } from './ad-form.js';
import { map, MAP_COORDS_DEFAULT, MAP_ZOOM_DEFAULT } from './map.js';
import { showErrorPopup, showSuccessPopup } from './util.js';
import { getData } from './api.js';
import { renderMarkers } from './filters.js';
import './img.js';

const onDataFail = () => {
  document.querySelector('.error-message').classList.remove('hidden');
}

const onDataSuccess = (properties) => {
  renderMarkers(properties);
  activateMapForm();
}

deactivateApp();

map.on('load', () => {
  activateAdForm();
  setAdFormSubmit(showSuccessPopup, showErrorPopup);
  getData(onDataSuccess, onDataFail);
}).setView(
  MAP_COORDS_DEFAULT,
  MAP_ZOOM_DEFAULT
);

