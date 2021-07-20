import {OFFER_FEATURES, numberOfAvatars} from './variables.js';

const getRandomInteger = (rangeMin, rangeMax) => {
  if (rangeMin % 1 !== 0 && rangeMax !== 0) {
    throw new Error('В качестве аргументов могут использоваться только целые числа');
  }

  const minValue = Math.min(Math.abs(rangeMin), Math.abs(rangeMax));
  const maxValue = Math.max(Math.abs(rangeMin), Math.abs(rangeMax));

  return Math.floor(minValue + Math.random() * (maxValue - minValue));
};

const getRandomFloat = (rangeMin, rangeMax, floatNumber = 1) => {
  const minValue = Math.min(Math.abs(rangeMin), Math.abs(rangeMax));
  const maxValue = Math.max(Math.abs(rangeMin), Math.abs(rangeMax));

  return (minValue + Math.random() * (maxValue + 1 - maxValue)).toFixed(floatNumber);
};

// Функция, которая наполняет массив с адресами аватаров
const createAvatarsUrl = (array) => {
  // eslint-disable-next-line id-length
  for (let i = 1; i <= numberOfAvatars; i++) {
    if (i < 10) {
      array.push(`img/avatars/user0${i}`);
      continue;
    }
    array.push(`img/avatars/user${i}`);
  }
};

// Функция для взятия масива случайных значений из OFFER_FEATURES
const getRandomFeatures = () => {
  const featuresLength = getRandomInteger(1, OFFER_FEATURES.length - 1);
  let RANDOM_FEATURES = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i < featuresLength; i++) {
    RANDOM_FEATURES.push(OFFER_FEATURES[getRandomInteger(0, OFFER_FEATURES.length - 1)]);
  }
  const getUniqueFeatures = () => {
    const result = [];
    for (const item of RANDOM_FEATURES) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
    return result;
  };
  return RANDOM_FEATURES = getUniqueFeatures();
};

// eslint-disable-next-line no-unused-vars
const makeFormDisabled = (className, inputType) => {
  const form = document.querySelector(`.${className}`);
  form.classList.add(`${className}--disabled`);
  const inputFields = form.querySelectorAll(inputType);
  inputFields.forEach((inputField) => {
    inputField.disabled = true;
  });
};

// Включаем все єлементы формы но не трогаем поле адреса, ТЗ 3.4
// eslint-disable-next-line no-unused-vars
const makeFormEnabled = (className, inputType) => {
  const form = document.querySelector(`.${className}`);
  form.classList.remove(`${className}--disabled`);
  const inputFields = form.querySelectorAll(inputType);
  inputFields.forEach((inputField) => {
    if (!inputField.querySelector('#address')) {
      inputField.disabled = false;
    }
  });
};

// Функция для взятия случайного элемента массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

export {getRandomInteger, getRandomFloat, getRandomArrayElement, createAvatarsUrl, getRandomFeatures};
