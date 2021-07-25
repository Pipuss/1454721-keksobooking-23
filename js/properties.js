const TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const propertiesTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const changeValue = (element, value, isAdd = true) => {
  if (value && isAdd) {
    element.textContent = value;
  } else {
    element.remove();
  }
}

export const createpropertyElement = (property) => {
  const propertyElement = propertiesTemplate.cloneNode(true);
  changeValue(propertyElement.querySelector('.popup__title'), property.offer.title);
  changeValue(propertyElement.querySelector('.popup__text--address'), property.offer.address);
  changeValue(propertyElement.querySelector('.popup__type'), TYPES[property.offer.type]);
  changeValue(propertyElement.querySelector('.popup__description'), property.offer.description);
  changeValue(propertyElement.querySelector('.popup__text--price'), `${property.offer.price} ₽/ночь`, property.offer.price);
  changeValue(
    propertyElement.querySelector('.popup__text--capacity'),
    `${property.offer.rooms} комнаты для ${property.offer.guests} гостей`,
    property.offer.rooms && property.offer.guests,
  );
  changeValue(
    propertyElement.querySelector('.popup__text--time'),
    `Заезд после ${property.offer.checkin}, выезд до ${property.offer.checkout}`,
    property.offer.checkin && property.offer.checkout,
  );

  const featuresListElement = propertyElement.querySelector('.popup__features');

  if (property.offer.features && property.offer.features.length) {
    const modifires = property.offer.features.map((feature) => `popup__feature--${feature}`);

    featuresListElement.querySelectorAll('.popup__feature')
      .forEach((item) => {
        const modifer = item.classList[1];

        if(!modifires.includes(modifer)) {
          item.remove();
        }

      });
  } else {
    featuresListElement.remove();
  }

  const popupPhotos = propertyElement.querySelector('.popup__photos');
  const image = popupPhotos.querySelector('.popup__photo');

  if (property.offer.photos && property.offer.photos.length) {
    property.offer.photos.forEach((photo) => {
      const imageElement = image.cloneNode();
      imageElement.src = photo;
      popupPhotos.appendChild(imageElement);
    });
    image.remove();
  } else {
    popupPhotos.remove();
  }

  if (property.author.avatar) {
    propertyElement.querySelector('.popup__avatar').src = property.author.avatar;
  }

  return propertyElement;
}
