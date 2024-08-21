import { createPhotos } from './data.js';
import { createMiniatures } from './miniatures.js';
import './upload-form.js';

createMiniatures(createPhotos());
