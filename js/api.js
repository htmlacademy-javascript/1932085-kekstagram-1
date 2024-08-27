import { GET_DATA, POST_DATA } from './const.js';

const getData = () => fetch(GET_DATA)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Что-то пошло не так');
    }
    return response.json();
  });

const sendData = (data) => fetch(POST_DATA, {
  method: 'POST',
  body: data
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Что-то пошло не так');
    }
  });

export { getData, sendData };
