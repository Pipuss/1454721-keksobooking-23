/* eslint-disable no-console */

// Описываем функцию, которая проверяет совпадает ли диапазон с условием задачи и дает допуск искать из диапазона рандомное число в следующих функциях.
const isAdmission = (min, max) => (min >= 0 && max >= 0 && min < max);

// Далее описываем функции для возвражения случайных чисел из диапазона
const getRandomInteger = (rangeMin, rangeMax) => {
  if (isAdmission(rangeMin, rangeMax)) {
    return console.log(`Целое число из диапазона: ${Math.floor(rangeMin + Math.random() * (rangeMax + 1 - rangeMin))}`);
  }
  console.log('Что то пошло не так. Проверь положительные ли числа и не равны ли друг другу.');
};

const getRandomFloat = (rangeMin, rangeMax, floatNumber) => {
  if (isAdmission(rangeMin, rangeMax)) {
    return console.log(`Число с плавающей точкой из диапазона: ${(rangeMin + Math.random() * (rangeMax + 1 - rangeMin)).toFixed(floatNumber)}`);
  }
  console.log('Что то пошло не так. Проверь положительные ли числа и не равны ли друг другу.');
};

getRandomInteger(1, 10);
getRandomFloat(35.65000, 35.70000, 5);
