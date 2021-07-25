const OFFER_TYPE_TRANSLATE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const offersList = document.querySelector('.map__canvas');
const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');

const createSimilarElement = ((author, offer) => {
  const similarElement = similarOfferTemplate.cloneNode(true);

  // Функция для поиска элемента в DOM и установки атрибутов
  const  find = (className) => similarElement.querySelector(className);

  // Поиск и наполнение текстовым содержимым
  const findFill = (className, content) => {
    if (content === undefined) {
      return similarElement.classList.add('visually-hidden');
    }
    similarElement.querySelector(className).textContent = content;
  };

  if (author.avatar) {
    find('.popup__avatar').src = author.avatar;
  } else {
    find('.popup__avatar').classList.add('visually-hidden');
  }

  if (offer.title) {
    findFill('.popup__title', offer.title);
  } else {
    find('.popup__title').classList.add('visually-hidden');
  }

  if (offer.address) {
    findFill('.popup__text--address',  `${offer.address}`);
  } else {
    find('.popup__text--address').classList.add('visually-hidden');
  }

  if (offer.price) {
    findFill('.popup__text--price', `${offer.price} `);
    find('.popup__text--price').insertAdjacentHTML('beforeend', '<span>₽/ночь</span>');
  } else {
    find('.popup__text--price').classList.add('visually-hidden');
  }

  if (offer.type) {
    findFill('.popup__type', OFFER_TYPE_TRANSLATE[offer.type]);
  } else {
    find('.popup__type').classList.add('visually-hidden');
  }

  if (offer.rooms) {
    findFill('.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  } else {
    find('.popup__text--capacity').classList.add('visually-hidden');
  }

  if (offer.checkin) {
    findFill('.popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  } else {
    find('.popup__text--time').classList.add('visually-hidden');
  }

  // Находим и очищаем контейнер .popup__features
  findFill('.popup__features', '');
  // После чего наполнаем список уже нужным количеством пунктов списка
  if (offer.features) {
    offer.features.forEach((feature) => {
      find('.popup__features').insertAdjacentHTML('beforeend', `<li class="popup__feature popup__feature--${feature}"></li>`);
    });
  } else {
    find('.popup__features').classList.add('visually-hidden');
  }

  if (offer.description) {
    findFill('.popup__description', offer.description);
  } else {
    find('.popup__description').classList.add('visually-hidden');
  }

  if (offer.photos) {
    findFill('.popup__photos', '');
    offer.photos.forEach((photo) => {
      find('.popup__photos').insertAdjacentHTML('beforeend', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
    });
  } else {
    find('.popup__photos').classList.add('visually-hidden');
  }

  return offersList.appendChild(similarElement);
});

export {createSimilarElement};
