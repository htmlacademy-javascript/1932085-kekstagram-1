import { setEscapeControl, removeEscapeControl } from './escape-control.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const closeSusseccPopup = () => {
  document.querySelector('.success').remove();
};

export const showSuccessPopup = () => {
  const successPopup = successTemplate.cloneNode(true);
  document.body.append(successPopup);
  successPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains('success') || target.classList.contains('success__button')) {
      closeSusseccPopup();
      removeEscapeControl();
    }
  });
  setEscapeControl(closeSusseccPopup);
};

const closeErrorPopup = () => {
  document.querySelector('.error').remove();
};

export const showErrorPopup = () => {
  const errorPopup = errorTemplate.cloneNode(true);
  document.body.append(errorPopup);
  errorPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains('error') || target.classList.contains('error__button')) {
      closeErrorPopup();
      removeEscapeControl();
    }
  });
  setEscapeControl(closeErrorPopup);
};
