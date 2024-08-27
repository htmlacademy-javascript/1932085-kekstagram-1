const errorDataTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const isEscapeKey = (evt) => evt.key === 'Escape';

const showErrorMessage = () => {
  const errorMessage = errorDataTemplate.cloneNode(true);
  document.body.append(errorMessage);
  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, 3000);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, showErrorMessage };
