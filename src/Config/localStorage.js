const saveLocalScore = (score) => {
  localStorage.setItem('score', JSON.stringify(score));
};

const getLocalScore = () => {
  let score = JSON.parse(localStorage.getItem('score'));
  if (score === null) {
    score = 0;
    saveLocalScore(score);
  }
  return score;
};

const resetLocalScore = () => {
  saveLocalScore(0);
};

export { saveLocalScore, getLocalScore, resetLocalScore };