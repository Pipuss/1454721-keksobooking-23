import {AVATARS, OFFER_TYPE, numberOfOffers} from './variables.js';
import { getRandomInteger, getRandomFloat, getRandomArrayElement, createAvatarsUrl, getRandomFeatures} from './utils.js';

createAvatarsUrl(AVATARS);

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

export {similarOffers};
