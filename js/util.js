/* eslint-disable no-use-before-define */
const successPopup = document.querySelector('.success');
const errorPopup = document.querySelector('.error');
const errorButton = errorPopup.querySelector('.error__button');

const onSuccessEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideSuccessPopup();
  }
};

const onErrorEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideErrorPopup();
  }
};

const onSuccessDocumentClick = (evt) =>  {
  evt.preventDefault();
  hideSuccessPopup();
};

const onErrorDocumentClick = (evt) => {
  evt.preventDefault();
  hideErrorPopup();
};

const onErrorButtonClick = (evt) =>  {
  evt.preventDefault();
  hideErrorPopup();
};

const showSuccessPopup = () => {
  successPopup.classList.remove('hidden');
  document.addEventListener('keydown', onSuccessEscKeydown);
  document.addEventListener('click', onSuccessDocumentClick);
};

const hideSuccessPopup = () => {
  successPopup.classList.add('hidden');
  document.removeEventListener('keydown', onSuccessEscKeydown);
  document.removeEventListener('click', onSuccessDocumentClick);
};

const showErrorPopup = () => {
  errorPopup.classList.remove('hidden');
  errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onErrorEscKeydown);
  document.addEventListener('click', onErrorDocumentClick);
};

const hideErrorPopup = () => {
  errorPopup.classList.add('hidden');
  errorButton.removeEventListener('click', onErrorButtonClick);
  document.removeEventListener('keydown', onErrorEscKeydown);
  document.removeEventListener('click', onErrorDocumentClick);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { showSuccessPopup, showErrorPopup, debounce };
