const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const createPicture = ({url, description, comments, likes}) => {
  const pictureNew = template.cloneNode(true);

  pictureNew.querySelector('.picture__img').src = url;
  pictureNew.querySelector('.picture__img').alt = description;
  pictureNew.querySelector('.picture__comments').textContent =
    comments.length;
  pictureNew.querySelector('.picture__likes').textContent = likes;
  return pictureNew;
};

const createMiniatures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureNew = createPicture(picture);
    fragment.append(pictureNew);
  });
  container.append(fragment);
};

export { createMiniatures };

