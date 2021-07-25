// eslint-disable-next-line no-unused-vars
const getRandomInteger = (rangeMin, rangeMax) => {
  if (rangeMin % 1 !== 0 && rangeMax !== 0) {
    throw new Error('В качестве аргументов могут использоваться только целые числа');
  }

  const minValue = Math.min(Math.abs(rangeMin), Math.abs(rangeMax));
  const maxValue = Math.max(Math.abs(rangeMin), Math.abs(rangeMax));

  return Math.floor(minValue + Math.random() * (maxValue - minValue));
};

// eslint-disable-next-line no-unused-vars
const getRandomFloat = (rangeMin, rangeMax, floatNumber = 1) => {
  const minValue = Math.min(Math.abs(rangeMin), Math.abs(rangeMax));
  const maxValue = Math.max(Math.abs(rangeMin), Math.abs(rangeMax));

  return (minValue + Math.random() * (maxValue + 1 - maxValue)).toFixed(floatNumber);
};

const ALERT_SHOW_TIME = 5000;

// Функция для взятия случайного элемента массива

export const success = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successElement = successTemplate.cloneNode(true);
  document.body.appendChild(successElement);

  setTimeout(() => {
    successElement.remove();
  }, ALERT_SHOW_TIME);
};

export const error = () => {
  const successTemplate = document.querySelector('#error').content.querySelector('.error');
  const successElement = successTemplate.cloneNode(true);
  document.body.appendChild(successElement);

  setTimeout(() => {
    successElement.remove();
  }, ALERT_SHOW_TIME);

};
