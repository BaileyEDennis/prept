import axios from 'axios';

const baseUrl = 'https://prept-8aba9.firebaseio.com/';

const getQuestions = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

export default { getQuestions };
