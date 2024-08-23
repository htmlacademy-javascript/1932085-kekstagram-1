import { GET_DATA } from './const.js';

const getData = () => fetch(GET_DATA)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Что-то пошло не так');
    }
    return response.json();
  });

export { getData };
