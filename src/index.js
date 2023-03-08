import './style.scss';
import { addScore, showScores } from './modules/game.js';
import showToast from './modules/toast.js';

const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', async () => {
  showScores();
});

const submitButton = document.querySelector('form > button');
submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const newScore = await addScore(user, score);
  document.querySelector('form').reset();
  showToast(newScore.result);
});

showScores();
