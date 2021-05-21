import 'phaser';
import ScrollingBackground from '../Entities/scrollingBackground';
import { resetLocalScore, getLocalScore } from '../Config/localStorage';
import { postScore, getScores } from '../Config/scoresAPI';
import config from '../Config/config';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("Highscore");
  }

  create() {
    getScores().then(response => {
      response.sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map((game, i) => {
          const text = `${i + 1}. Pilot: ${game[0]} --- Score: ${game[1]}`;
          this.add.text(config.width / 2, (85 * (i + 1.1)) + 100, text, {
            fontFamily: 'Retroniod',
            fontSize: '20px',
            color: '#31A2F2',
            align: 'center',
            lineHeight: '1.5',
          }).setOrigin(0.5, 0.5);
          return text;
        });
    });
  }
}