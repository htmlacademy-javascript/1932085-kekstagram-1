import { isEscapeKey } from './util.js';

const bigPictureTag = document.querySelector('.big-picture');
const closeButtonTag = bigPictureTag.querySelector('.big-picture__cancel');
const imageTag = bigPictureTag.querySelector('.big-picture__img img');
const socialCommentsCount = document.querySelector('.social__comment-count');
const newCommentsLoader = document.querySelector('.comments-loader');
const socialCommentClone = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');

const createSocialCommentTag = ({ avatar, message, name, id }) => {
  const socialComment = socialCommentClone.cloneNode(true);
  socialComment.querySelector('.social__picture').src = avatar;
  socialComment.querySelector('.social__text').textContent = message;
  socialComment.querySelector('.social__picture').alt = name;
  socialComment.dataset.socialCommentId = id;
  return socialComment;
};

const createComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const createCommentTag = createSocialCommentTag(comment);
    fragment.append(createCommentTag);
  });
  commentsContainer.append(fragment);
};

const renderBigPicture = (photo) => {
  imageTag.src = photo.url;
  bigPictureTag.querySelector('.likes-count').textContent = photo.likes;
  socialCommentsCount.textContent = photo.length;
  commentsContainer.innerHTML = '';

  createComments();
  bigPictureTag.querySelector('.social__caption').alt = photo.description;
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

export { openModal, closeModal, };
