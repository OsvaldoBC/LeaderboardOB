import { getData, postData } from './api-hit';

const displayData= async () => {
  const scores = await getData();
  const resultsBox = document.querySelector('.results');
  const fragment = new DocumentFragment();
  resultsBox.innerHTML = '';
  if (scores.length === 0) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Score table is emty , submit your score !';
    resultsBox.append(paragraph);
  } else {
    scores.forEach((element) => {
      const { user, score } = element;
      const paragraph = document.createElement('p');
      paragraph.classList.add('score');
      paragraph.innerText = `${user}: ${score}`;
      fragment.append(paragraph);
    });
    resultsBox.append(fragment);
  }
};

const addData = async () => {
  const inputs = document.querySelector('form').elements;
  const [user, score] = [inputs[0].value, inputs[1].value];
  await postData(user, score);
  inputs[0].value = '';
  inputs[1].value = '';
  displayScores();
};

export { displayData, addData };