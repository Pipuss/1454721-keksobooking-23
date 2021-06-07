const getRandomInteger = (rangeMin, rangeMax) => {
  const randomNumber = rangeMin + Math.random() * (rangeMax + 1 - rangeMin);
  // floor а не round, потому что есть вероятность что полученое число будет выходить за рамки диапазона на 1
  return Math.floor(randomNumber);
};
// Тестируем
for (;;){
  let a = +prompt("Диапазон от", '');
  let b = +prompt("Диапазон до", '');
  if (a < 0 || b < 0) {
    alert('Диапазон должен состоять из положительных чисел. Давай-ка ещё ра');
    continue;
  } else if (b < a || b === a) {
    alert("Число \"от\" не может быть больше либо равно числу \"до\" . Давай-ка ещё раз");
    continue;
  }
  alert("Случайное число из диапазона: " + getRandomInteger(a, b));
  break;
}
