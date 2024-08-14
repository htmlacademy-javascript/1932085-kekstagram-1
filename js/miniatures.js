import { openModal,} from './big-picture.js';

const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const localPictures = [];

const createPicture = ({ url, description, comments, likes, id }) => {
  const pictureNew = template.cloneNode(true);

  pictureNew.querySelector('.picture__img').src = url;
  pictureNew.querySelector('.picture__img').alt = description;
  pictureNew.querySelector('.picture__comments').textContent =
    comments.length;
  pictureNew.querySelector('.picture__likes').textContent = likes;
  pictureNew.dataset.pictureNewId = id;
  return pictureNew;
};

const createMiniatures = (pictures) => {
  localPictures.length = 0;
  localPictures.push(...pictures.slice());
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureNew = createPicture(picture);
    fragment.append(pictureNew);
  });
  container.append(fragment);
};

container.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.pictureNewId);
    const photo = localPictures.find((item) => item.id === id);
    openModal(photo);
  }
});

export { createMiniatures };

