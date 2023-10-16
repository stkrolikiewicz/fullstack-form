import {api} from '../http';

const getAnswers = () =>
  api({
    url: 'http://localhost:8080/answers/',
    method: 'GET',
  });

const postAnswer = answer =>
  api({
    url: 'http://localhost:8080/answers/add',
    method: 'POST',
    body: JSON.stringify(answer),
    headers: {
      'Content-Type': 'application/json',
    },
  });

export {getAnswers, postAnswer};
