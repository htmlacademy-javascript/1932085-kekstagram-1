import { EFFECTS, EFFECTS_SETTINGS } from './const.js';

const sliderTag = document.querySelector('.effect-level__slider');
const effectsTag = document.querySelector('.effects');
const inputTag = document.querySelector('.effect-level__value');
const imageTag = document.querySelector('.img-upload__preview img');
const sliderContainerTag = document.querySelector('.effect-level');
const defaultRadioTag = document.querySelector(`.effects__radio[value=${EFFECTS.DEFAULT}]`);
let currentEffect = EFFECTS.DEFAULT;

noUiSlider.create(sliderTag, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

const renderEffect = () => {
  if (currentEffect !== EFFECTS.DEFAULT) {
    imageTag.style.filter = `${EFFECTS_SETTINGS[currentEffect].STYLE}(${inputTag.value}${EFFECTS_SETTINGS[currentEffect].UNITS})`;
  }
};

sliderTag.noUiSlider.on('update', () => {
  inputTag.value = sliderTag.noUiSlider.get();
  renderEffect();
});

const updateSlider = () => {
  sliderTag.noUiSlider.updateOptions({
    range: {
      min: EFFECTS_SETTINGS[currentEffect].MIN,
      max: EFFECTS_SETTINGS[currentEffect].MAX,
    },
    step: EFFECTS_SETTINGS[currentEffect].STEP,
    start: EFFECTS_SETTINGS[currentEffect].MAX,
  });
};

const resetEffects = () => {
  sliderContainerTag.classList.add('hidden');
  imageTag.style.filter = '';
  inputTag.value = 0;
  defaultRadioTag.checked = true;
};

effectsTag.addEventListener('change', (evt) => {
  currentEffect = evt.target.value;
  if (currentEffect === EFFECTS.DEFAULT) {
    resetEffects();
  } else {
    updateSlider(currentEffect);
    sliderContainerTag.classList.remove('hidden');
  }
});

resetEffects();

export { resetEffects };
