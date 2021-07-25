const addOfferForm = document.querySelector('.ad-form');
const offerTitle = addOfferForm.querySelector('#title');
const offerPrice = addOfferForm.querySelector('#price');
const offerRoomsNumber = addOfferForm.querySelector('#room_number');
const offerRoomsCapacity = addOfferForm.querySelector('#capacity');
const offerRoomsType = addOfferForm.querySelector('#type');
const offerTimeIn = addOfferForm.querySelector('#timein');
const offerTimeOut = addOfferForm.querySelector('#timeout');
// const resetButton = addOfferForm.querySelector('.ad-form__reset');

const offerPriceDepending = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

export const validateForm = () => {
  offerTitle.addEventListener('input', () => {

    const minLength = offerTitle.minLength;
    const maxLength = offerTitle.maxLength;

    const valueLength = offerTitle.value.length;

    if (valueLength < minLength) {
      offerTitle.setCustomValidity(`Не хватает ещё ${minLength - valueLength} символов`);
    } else if (valueLength > maxLength) {
      offerTitle.setCustomValidity(`Длиннее возможного на ${valueLength - maxLength} символов`);
    } else {
      offerTitle.setCustomValidity('');
    }

    offerTitle.reportValidity();
  });

  const changeOfferMinPrice = (data, optionElement, priceElement) => {
    priceElement.placeholder = data[optionElement.querySelector(':checked').value];
  };

  offerRoomsType.addEventListener('change', () => {
    changeOfferMinPrice(offerPriceDepending, offerRoomsType, offerPrice);
  });

  offerPrice.addEventListener('input', () => {
    const maxPrice = +offerPrice.max;
    const minPrice = +offerPrice.min;
    const price = +offerPrice.value;

    if (price > maxPrice) {
      offerPrice.setCustomValidity(`Укажите цену не больше ${maxPrice}`);
    } else if (price < minPrice) {
      offerPrice.setCustomValidity(`Укажите цену не меньше ${minPrice}`);
    } else {
      offerPrice.setCustomValidity('');
    }

    offerPrice.reportValidity();
  });

  offerTimeIn.addEventListener('change', () => {
    const timesIn = offerTimeIn.querySelectorAll('option');
    const timesOut = offerTimeOut.querySelectorAll('option');
    // eslint-disable-next-line id-length
    timesIn.forEach((timeIn, i) => {
      if (timeIn.selected) {
        timesOut[i].selected = 'selected';
      }
    });
  });

  offerRoomsNumber.addEventListener('change', () => {
    const roomNumbers = offerRoomsNumber.querySelectorAll('option');
    const roomCapacities = offerRoomsCapacity.querySelectorAll('option');
    // eslint-disable-next-line id-length
    roomNumbers.forEach((roomNumber, i) => {
      if (roomNumber.selected) {
        roomCapacities[i].selected = 'selected';
      }
    });
  });

};

export const submitingForm = (onSuccess, onError) => {
  addOfferForm.addEventListener('submit', (evt) => {

    evt.preventDefault();
    addOfferForm.children[2].disabled = false;

    fetch(
      'https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        type: 'multipart/form-data',
        body: new FormData(addOfferForm),
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          onError();
        }
      })
      .catch(() => onError());
  });
};
