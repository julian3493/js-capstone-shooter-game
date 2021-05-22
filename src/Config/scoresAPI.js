//  FQyLd3szps7WIlySAb52

import 'regenerator-runtime';

const fetch = require('node-fetch');

const postScore = async (player, score) => {
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FQyLd3szps7WIlySAb52/scores/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: player, score: score }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    throw new Error('Unable to post Highscores!');
  }
};

const getScores = async () => {
  const leaderboard = [];
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FQyLd3szps7WIlySAb52/scores/', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await request.json();
    const data = response.result;
    data.forEach(entry => {
      leaderboard.push([entry.user, entry.score]);
    });
    return leaderboard;
  } catch (error) {
    throw new Error('Unable to find Highscores!');
  }
};


export { getScores, postScore };