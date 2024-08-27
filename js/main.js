import { getData } from './api.js';
import { createMiniatures } from './miniatures.js';
import { showErrorMessage } from './util.js';
import './upload-form.js';
import { init as initFilter } from './filters.js';

getData()
  .then((data) => {
    initFilter(data);
    createMiniatures(data);
  })
  .catch(() => {
    showErrorMessage();
  });
