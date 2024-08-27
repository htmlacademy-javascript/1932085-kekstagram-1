import { isValid } from './validation.js';
import { reset as resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { SubmitButton } from './const.js';
import { showSuccessPopup, showErrorPopup } from './popups.js';
import { setEscapeControl, removeEscapeControl } from './escape-control.js';

const uploadFileTag = document.querySelector('#upload-file');
const uploadButtonTag = document.querySelector('#upload-submit');
const uploadWindowTag = document.querySelector('.img-upload__overlay');
const closeButtonTag = document.querySelector('.img-upload__cancel');
const formTag = document.querySelector('.img-upload__form');
const hashtagsInput = formTag.querySelector('.text__hashtags');
const imagePreviewTag = document.querySelector('.img-upload__preview img');
const radiosSpanTags = document.querySelectorAll('.effects__preview');
const descriptionTextarea =
  formTag.querySelector('.text__description');

const openModal = () => {
  uploadWindowTag.classList.remove('hidden');
  document.body.classList.add('modal-open');
  const imageUrl = URL.createObjectURL(uploadFileTag.files[0]);
  imagePreviewTag.src = imageUrl;
  radiosSpanTags.forEach((span) => {
    span.style.backgroundImage = `url(${imageUrl})`;
  });
  resetScale();
  setEscapeControl(closeModal, canBeClosed);
};

function closeModal() {
  uploadWindowTag.classList.add('hidden');
  formTag.reset();
  resetEffects();
  document.body.classList.remove('modal-open');
}

uploadFileTag.addEventListener('change', () => {
  openModal();
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
  removeEscapeControl();
});

const canBeClosed = () => !(hashtagsInput === document.activeElement || descriptionTextarea === document.activeElement);

const blockSubmit = (isBlocked = false) => {
  uploadButtonTag.disabled = isBlocked;
  uploadButtonTag.textContent = isBlocked ? SubmitButton.SENDING : SubmitButton.DEFAULT;
};

formTag.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    const formData = new FormData(formTag);
    blockSubmit(true);
    sendData(formData)
      .then(() => {
        closeModal();
        removeEscapeControl();
        showSuccessPopup();
      })
      .catch(() => {
        showErrorPopup();
      })
      .finally(() => {
        blockSubmit();
      });
  }
});
