const PHOTOS_COUNT = 25;
const DESCRIPTIONS = [
  'Не ждали',
  'Последний день помпеи',
  'Явление Христа народу',
  'Утро в сосновом лесу',
  'Девятый вал',
  'Купчиха за чаем',
  'Черный квадрат',
  'Бурлаки на Волге',
  'Купание красного коня'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Геннадий',
  'Васиуалий',
  'Пушкин',
  'Манька-облигация',
  'Кармен',
  'Ирусик',
  'Эллочка',
  'Гумберт Гумберт',
  'Енот-полоскун'
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_COMMENT_ID = 1;
const MAX_COMMENT_ID = 1000000;
const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const uniqueId = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const uniqueURL = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const uniqueCommentId = createRandomIdFromRangeGenerator(MIN_COMMENT_ID, MAX_COMMENT_ID);

const createComment = () => ({
  id: uniqueCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,
  message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createComments = (n) => {
  const comments = [];
  for (let i = 1; i <= n; i++) {
    comments.push(createComment());
  }
  return comments;
};

const createPhoto = () => ({
  id: uniqueId(),
  url: `photos/${uniqueURL()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: createComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS))
});

const createPhotos = (n) => {
  const photos = [];
  for (let i = 1; i <= n; i++) {
    photos.push(createPhoto());
  }
  return photos;
};

console.log(createPhotos(PHOTOS_COUNT));

