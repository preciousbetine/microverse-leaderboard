// const gameID = '4oNvU3Bhjf2ub7nbIBB5';
const gameID = 'xLw0Vz72706E0aKqRFgf';
const apiBase = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const getScores = async () => {
  const games = await fetch(`${apiBase}/games/${gameID}/scores/`);
  const gamesJSON = await games.json();
  return gamesJSON.result;
};

const addScore = async (user, score) => {
  const newScore = await fetch(`${apiBase}/games/${gameID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const newScoreJSON = await newScore.json();
  return newScoreJSON;
};

const showScores = async () => {
  const scoresList = document.getElementById('scores');
  scoresList.innerHTML = '';
  const scores = await getScores();

  scores.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `${score.user}: ${score.score}`;
    scoresList.appendChild(li);
  });
};

module.exports = {
  addScore,
  showScores,
};
