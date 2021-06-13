const getRandomInteger = (rangeMin, rangeMax) => {
  if (rangeMin % 1 !== 0 && rangeMax !== 0) {
    throw new Error('В качестве аргументов могут использоваться только целые числа');
  }

  const minValue = Math.min(rangeMin, rangeMax);
  const maxValue = Math.max(rangeMin, rangeMax);

  return Math.floor(minValue + Math.random() * (maxValue - minValue));
};

const getRandomFloat = (rangeMin, rangeMax, floatNumber) => {
  const minValue = Math.min(rangeMin, rangeMax);
  const maxValue = Math.max(rangeMin, rangeMax);
  return (minValue + Math.random() * (maxValue + 1 - maxValue)).toFixed(floatNumber);
};

getRandomInteger();
getRandomFloat();
