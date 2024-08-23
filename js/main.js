import { getData } from './api.js';
import { createMiniatures } from './miniatures.js';
import { showErrorMessage } from './util.js';
import './upload-form.js';

getData()
  .then((data) => {
    createMiniatures(data);
  })
  .catch(() => {
    showErrorMessage();
  });
