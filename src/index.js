// import _ from 'lodash';
import './styles.css';
import { displayData, addData } from './Modules/UI.js';

const refreshBtn = document.querySelector('#refresh');
const submitBtn = document.querySelector('#submit');

displayData();

refreshBtn.addEventListener('click', displayData);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addData();

});

