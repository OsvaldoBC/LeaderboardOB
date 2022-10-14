const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6lpEDrq5xDrCiGp3cjST/scores/';

const getData = async () => {
  const { result } = await fetch(url).then((response) => response.json());
  return result;
};

const postData = async (user, score) => {
  const data = { user, score };
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json());
  return result;
};

export { getData, postData };