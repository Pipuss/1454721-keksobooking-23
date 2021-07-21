import{setFormDisabled, setFormEnabled} from './ad-form.js';
import {renderMap, renderMarkers} from './map-setup.js';


const showError = (err) => {
  alert(err);
};

const deactivateApp = () => {
  setFormDisabled('map__filters', 'fieldset');
  setFormDisabled('ad-form', 'fieldset');
};

const activateApp = () => {
  console.log(`App is activated`);

  fetch(`https://23.javascript.pages.academy/keksobooking/data`)
    .then(response => response.json())
    .then(data => {
      renderMarkers(data);
      setFormEnabled();
    })
    .catch(err => showError(err))
};

// // Неактивное состояние (заблокирована карта фильтры форма)   <==========
// // *Инициализировать карту. Then:   <========
// //   Перевести в активное состояние:
// //    Скачать данные с сервера. Then:
// //      Отрисовать маркеры
// //      Установить фильтры
// //      Установить форму            <========


deactivateApp();
renderMap(activateApp);
