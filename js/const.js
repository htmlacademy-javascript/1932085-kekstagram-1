export const MAX_DESCRIPTION_LENGTH = 140;
export const MAX_HASHTAGS = 5;
export const SPACE = /\s+/g;
export const HASHTAG_FORMULA = /^#[a-zа-яё0-9]{1,19}$/i;

export const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25
};
export const COMMENTS_PORTION = 5;

export const EFFECTS = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const EFFECTS_SETTINGS = {
  [EFFECTS.DEFAULT]: null,
  [EFFECTS.CHROME]: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    STYLE: 'grayscale',
    UNITS: ''
  },
  [EFFECTS.SEPIA]: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    STYLE: 'sepia',
    UNITS: ''
  },
  [EFFECTS.MARVIN]: {
    MIN: 0,
    MAX: 100,
    STEP: 1,
    STYLE: 'invert',
    UNITS: '%'
  },
  [EFFECTS.PHOBOS]: {
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    STYLE: 'blur',
    UNITS: 'px'
  },
  [EFFECTS.HEAT]: {
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
    STYLE: 'brightness',
    UNITS: ''
  },
};

export const GET_DATA = 'https://28.javascript.htmlacademy.pro/kekstagram/data';
