import { isValid } from './validation.js';
import { isEscapeKey } from './util.js';

const uploadFileTag = document.querySelector('#upload-file');
const uploadWindowTag = document.querySelector('.img-upload__overlay');
const closeButtonTag = document.querySelector('.img-upload__cancel');
const formTag = document.querySelector('.img-upload__form');
const hashtagsInput = formTag.querySelector('.text__hashtags');
const descriptionTextarea =
formTag.querySelector('.text__description');

const openModal = () => {
  uploadWindowTag.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

function closeModal () {
  uploadWindowTag.classList.add('hidden');
  formTag.reset();
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadFileTag.addEventListener('change', () => {
  openModal();
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

function onPopupEscKeydown(evt) {
  if (
    isEscapeKey(evt) &&
    !(
      hashtagsInput === document.activeElement ||
      descriptionTextarea === document.activeElement
    )
  ) {
    evt.preventDefault();
    closeModal();
  }
}

formTag.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});

