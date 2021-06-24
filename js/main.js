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

// Module4-task1

const AVATARS = [];
const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const numberOfOffers = 10;
const numberOfAvatars = 10;
// Функция, которая наполняет массив с адресами аватаров
const createAvatarsUrl = (array) => {
  // eslint-disable-next-line id-length
  for (let i = 1; i <= numberOfAvatars; i++) {
    if (i < 10) {
      array.push(`img/avatars/user0${i}`);
    } else {
      array.push(`img/avatars/user${i}`);
    }
  }
};

createAvatarsUrl(AVATARS);

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

// Функция для взятия случайного элемента массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// Функция для генерации масива обьектов
const createOffer = () => ({
  author: {
    avatar: getRandomArrayElement(AVATARS),
  },
  offer: {
    title: 'Аренда на сутку',
    address: {
      lat: getRandomFloat(35.65000, 35.70000, 5),
      lng: getRandomFloat(139.70000, 139.80000, 5),
    },
    price: getRandomInteger(1, 100),
    type: getRandomArrayElement(OFFER_TYPE),
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 10),
    checkin: `${getRandomInteger(12,14)}:00`,
    checkout: `${getRandomInteger(12,14)}:00`,
    features: getRandomFeatures(),
    description: 'Євроремонт, рядом супермаркет',
    photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
  },
  location: {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  },
});

const similarOffers = new Array(numberOfOffers).fill(null).map(() => createOffer());

// eslint-disable-next-line no-console
console.log(similarOffers);
