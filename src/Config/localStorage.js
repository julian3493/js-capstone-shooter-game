const saveLocalScore = (score) => {
  localStorage.setItem('score', JSON.stringify(score));
};

const getLocalScore = () => {
  const score = JSON.parse(localStorage.getItem('score'));
  return score;
};

const resetLocalScore = () => {
  saveLocalScore(0);
};

export { saveLocalScore, getLocalScore, resetLocalScore };