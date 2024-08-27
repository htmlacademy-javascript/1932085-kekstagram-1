import { isEscapeKey } from './util.js';

const stack = [];
let listener = null;

const onDocumentEscape = (evt) => {
  if (isEscapeKey(evt)) {

    const lastElementIndex = stack.length - 1;
    if (stack[lastElementIndex].cond && !stack[lastElementIndex].cond()) {
      return;
    }
    stack[lastElementIndex].func();
    stack.length = stack.length - 1;
    if (!stack.length) {
      document.removeEventListener('keydown', onDocumentEscape);
      listener = null;
    }
  }
};

export const setEscapeControl = (closeFunction, condition = null) => {
  stack.push({
    func: closeFunction,
    cond: condition
  });
  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentEscape);
  }
};

export const removeEscapeControl = () => {
  stack.length = stack.length - 1;
  if (!stack.length) {
    document.removeEventListener('keydown', onDocumentEscape);
    listener = null;
  }
};
