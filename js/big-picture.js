import {isEscapeKey} from './util.js';

const bigPictureTag = document.querySelector('.big-picture');
const closeButtonTag = bigPictureTag.querySelector('.big-picture__cancel');
const imageTag = bigPictureTag.querySelector('.big-picture__img img');
const socialCommentsCount = document.querySelector('.social__comment-count');
const newCommentsLoader = document.querySelector('.comments-loader');

const renderBigPicture = (photo) => {
  imageTag.src = photo.url;
};

const openModal = (data) => {
  bigPictureTag.classList.remove('hidden');
  socialCommentsCount.classList.add('hidden');
  newCommentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  renderBigPicture(data);
  document.addEventListener('keydown', onPopupEscKeydown);
};

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPictureTag.classList.add('hidden');
});

const closeModal = () => {
  bigPictureTag.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}
export { openModal, closeModal};
