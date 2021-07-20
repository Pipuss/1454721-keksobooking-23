import {adFormSetup} from './ad-form.js';

adFormSetup();
const showError = (err) => {
  alert(err);
}

const renderMarkers = (data) => {
  console.log(data);
}

// fetch(`https://23.javascript.pages.academy/keksobooking/data`)
//   .then(response => response.json())
//   .then(data => renderMarkers(data))
//   .catch(err => showError(err))

const deactivateApp = () => {
  console.log(`App is deactivated`);
}

const activateApp = () => {
  console.log(`App is activated`);
}

const initMap = () => {}





// Неактивное состояние (заблокирована карта фильтры форма)   <==========
// *Инициализировать карту. Then:   <========
//   Перевести в активное состояние:
//    Скачать данные с сервера. Then:
//      Отрисовать маркеры
//      Установить фильтры
//      Установить форму            <========






deactivateApp();

// initMap()
//   .then(() => activateApp())
//   .catch((err) => showError(err))





