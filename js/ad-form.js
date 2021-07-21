// eslint-disable-next-line no-unused-vars
const setFormDisabled = (className, inputType) => {
  const form = document.querySelector(`.${className}`);
  form.classList.add(`${className}--disabled`);
  const inputFields = form.querySelectorAll(inputType);
  inputFields.forEach((inputField) => {
    inputField.disabled = true;
  });
};

// Включаем все єлементы формы но не трогаем поле адреса, ТЗ 3.4
// eslint-disable-next-line no-unused-vars
const setFormEnabled = (className, inputType) => {
  const form = document.querySelector(`.${className}`);
  form.classList.remove(`${className}--disabled`);
  const inputFields = form.querySelectorAll(inputType);
  inputFields.forEach((inputField) => {
    if (!inputField.querySelector('#address')) {
      inputField.disabled = false;
    }
  });
};

export {setFormDisabled, setFormEnabled};
