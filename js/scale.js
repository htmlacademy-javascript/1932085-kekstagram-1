import { Scale } from './const.js';

const reduceButtonTag = document.querySelector('.scale__control--smaller');
const increaseButtonTag = document.querySelector('.scale__control--bigger');
const inputTag = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

let currentScale = Scale.MAX;

const render = () => {
  inputTag.value = `${currentScale}%`;
  image.style.transform = `scale(${currentScale / 100})`;
};

reduceButtonTag.addEventListener('click', () => {
  currentScale = currentScale - Scale.STEP >= Scale.MIN ? currentScale - Scale.STEP : Scale.MIN;
  render();
});

increaseButtonTag.addEventListener('click', () => {
  currentScale = currentScale + Scale.STEP <= Scale.MAX ? currentScale + Scale.STEP : Scale.MAX;
  render();
});

const reset = () => {
  currentScale = Scale.MAX;
  render();
};

export { reset };
