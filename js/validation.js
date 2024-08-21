import {
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS,
  SPACE,
  HASHTAG_FORMULA
} from './const.js';

const formTag = document.querySelector('.img-upload__form');
const hashtagsTag = document.querySelector('.text__hashtags');
const descriptionTag = document.querySelector('.text__description');

const pristine = new Pristine(formTag, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const createHashtagsArray = (value) => value
  .toLowerCase()
  .replaceAll(SPACE, ' ')
  .trim()
  .split(' ')
  .filter((item) => item.length > 0);

const checkHashtags = (value) => {
  const hashtags = createHashtagsArray(value);
  return hashtags.every((word) => HASHTAG_FORMULA.test(word));
};

const checkCountHashtags = (value) => {
  const hashtags = createHashtagsArray(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const checkUniqueHashtags = (value) => {
  const hashtags = createHashtagsArray(value);
  const uniques = new Set(hashtags);
  return hashtags.length === uniques.size;
};

const checkDescription = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(
  hashtagsTag,
  checkHashtags,
  'Хештег должен начинаться с # и содержать только буквы и цифры. Максимальная длина хештега 20 символов'
);

pristine.addValidator(
  hashtagsTag,
  checkCountHashtags,
  `Количество хештегов не должно превышать ${MAX_HASHTAGS}`
);

pristine.addValidator(
  hashtagsTag,
  checkUniqueHashtags,
  'Хештеги не должны повторяться'
);

pristine.addValidator(
  descriptionTag,
  checkDescription,
  `Длина сообщения не должна превышать ${MAX_DESCRIPTION_LENGTH}`
);

const isValid = () => pristine.validate();

export { isValid };
