import { postScore, getScores } from '../Config/scoresAPI';
import 'regenerator-runtime';

postScore.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ user: 'user_test', score: 10 }),
}));

getScores.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(),
}));

describe('Posting new highscores via async/await', () => {
  test('Will post a new highscore with a username and a score without errors', () => postScore('user_test', 10).then(response => {
    expect(response.result).toStrictEqual('Leaderboard score created correctly.');
  }));
});

describe('Retrieving highscores from the API', () => {
  test('It will return an object', () => getScores().then(response => {
    expect(typeof response).toBe('object');
  }));
});