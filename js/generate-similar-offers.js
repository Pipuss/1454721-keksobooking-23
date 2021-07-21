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

  // Функция для поиска элемента в DOM
  const  find = (className) => similarElement.querySelector(className);
  // Поиск и наполнение текстовым содержимым
  const findFill = (className, content) => {
    // if (content === undefined) {
    //   throw new Error ('Чего то не хватает');
    // }
    similarElement.querySelector(className).textContent = content;
  };

  find('.popup__avatar').src = `${author.avatar}`;
  findFill('.popup__title', offer.title);
  findFill('.popup__text--address',  `${offer.address}`);
  findFill('.popup__text--price', `${offer.price} `);
  find('.popup__text--price').insertAdjacentHTML('beforeend', '<span>₽/ночь</span>');
  findFill('.popup__type', OFFER_TYPE_TRANSLATE[offer.type]);
  findFill('.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  findFill('.popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);

  // Находим и очищаем контейнер .popup__features
  findFill('.popup__features', '');
  // После чего наполнаем список уже нужным количеством пунктов списка
  offer.features.forEach((feature) => {
    find('.popup__features').insertAdjacentHTML('beforeend', `<li class="popup__feature popup__feature--${feature}"></li>`);
  });

  findFill('.popup__description', offer.description);

  findFill('.popup__photos', '');
  offer.photos.forEach((photo) => {
    find('.popup__photos').insertAdjacentHTML('beforeend', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
  });

  return offersList.appendChild(similarElement);
});

export {createSimilarElement};
