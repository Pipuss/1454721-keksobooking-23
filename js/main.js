import{setFormDisabled, setFormEnabled} from './form-setup.js';
import {renderMap, renderMarkers} from './map-setup.js';
import {validateForm, submitingForm} from './form-validating.js';
import {success, error} from './utils.js';

const deactivateApp = () => {
  setFormDisabled('map__filters', 'fieldset');
  setFormDisabled('ad-form', 'fieldset');
};

const activateApp = () => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }

      const {statusText, status} = response;
      throw new Error(`${status} — ${statusText}`);
    })
    .then((response) => response.json())
    .then((data) => {
      renderMarkers(data);
      setFormEnabled('map__filters', 'fieldset');
      setFormEnabled('ad-form', 'fieldset');
      validateForm();
    });
};

// // // Неактивное состояние (заблокирована карта фильтры форма)   <==========
// // // *Инициализировать карту. Then:   <========
// // //   Перевести в активное состояние:
// // //    Скачать данные с сервера. Then:
// // //      Отрисовать маркеры
// // //      Установить фильтры
// // //      Установить форму            <========

deactivateApp();
renderMap(activateApp());
submitingForm(success, error);
