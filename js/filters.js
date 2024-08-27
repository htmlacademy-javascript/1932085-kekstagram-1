import { createMiniatures } from './miniatures.js';
import { debounce } from './util.js';
import { RANDOM_LIMIT } from './const.js';
const filtersTag = document.querySelector('.img-filters');
const filtersFormTag = filtersTag.querySelector('.img-filters__form');

const localPhotos = [];

const setActiveButton = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const filter = {
  'filter-default': () => localPhotos,
  'filter-discussed': () => [...localPhotos].sort((b, a) => a.comments.length - b.comments.length),
  'filter-random': () => [...localPhotos].sort(() => Math.random() - 0.5).slice(0, RANDOM_LIMIT)
};

filtersFormTag.addEventListener('click', debounce(({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button) {
    createMiniatures(filter[target.id]());
  }
}));

filtersFormTag.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button) {
    setActiveButton(target);
  }
});

export const init = (photos) => {
  localPhotos.length = 0;
  localPhotos.push(...photos.slice());
  filtersTag.classList.remove('img-filters--inactive');
};
