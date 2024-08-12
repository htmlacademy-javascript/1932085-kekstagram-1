import { isEscapeKey } from './util.js';

const bigPictureTag = document.querySelector('.big-picture');
const closeButtonTag = bigPictureTag.querySelector('.big-picture__cancel');
const imageTag = bigPictureTag.querySelector('.big-picture__img img');
const socialCommentsCount = document.querySelector('.social__comment-count');
const newCommentsLoader = document.querySelector('.comments-loader');
const socialCommentClone = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');
const COMMENTS_PORTION = 5;
const localComments = [];
let total = 0;
let renderedCommentsCount = 0;

const createSocialCommentTag = ({ avatar, message, name, id }) => {
  const socialComment = socialCommentClone.cloneNode(true);
  socialComment.querySelector('.social__picture').src = avatar;
  socialComment.querySelector('.social__text').textContent = message;
  socialComment.querySelector('.social__picture').alt = name;
  socialComment.dataset.socialCommentId = id;
  return socialComment;
};

const renderStatistics = () => {
  socialCommentsCount.innerHTML = `${renderedCommentsCount} из <span class="comments-count">${total}</span> комментариев`;
};

const renderLoader = () => {
  if (localComments.length) {
    newCommentsLoader.classList.remove('hidden');
  } else {
    newCommentsLoader.classList.add('hidden');
  }
};

const createComments = () => {
  const fragment = document.createDocumentFragment();

  localComments.splice(0, COMMENTS_PORTION).forEach((comment) => {
    const createCommentTag = createSocialCommentTag(comment);
    fragment.append(createCommentTag);
    renderedCommentsCount++;
  });
  commentsContainer.append(fragment);

  renderLoader();
  renderStatistics();
};

newCommentsLoader.addEventListener('click', createComments);

const renderBigPicture = (photo) => {
  imageTag.src = photo.url;
  bigPictureTag.querySelector('.likes-count').textContent = photo.likes;
  bigPictureTag.querySelector('.social__caption').textContent = photo.description;
  imageTag.alt = photo.description;
  commentsContainer.innerHTML = '';
  localComments.length = 0;
  localComments.push(...photo.comments.slice());
  total = localComments.length;
  renderedCommentsCount = 0;
  createComments();
};

const openModal = (data) => {
  bigPictureTag.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderBigPicture(data);
  document.addEventListener('keydown', onPopupEscKeydown);
};

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

function closeModal() {
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
