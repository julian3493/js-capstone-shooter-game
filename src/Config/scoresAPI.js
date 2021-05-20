//  FQyLd3szps7WIlySAb52

import 'regenerator-runtime';

const fetch = require('node-fetch');

const postScore = async (player, score) => {
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FQyLd3szps7WIlySAb52/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: player, score: score }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    throw new Error('Unable to post Highscores! Please try again later!');
  }
};

const getScores = async () => {
  const leaderboard = [];
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FQyLd3szps7WIlySAb52/scores/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error('Unable to fetch Highscores! Please try again later!');
  }
};


export { getScores, postScore };