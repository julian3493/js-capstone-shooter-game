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
    this.title = this.add.text(config.width * 0.5, 128, "Highscores", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    })
    this.title.setOrigin(0.5);

    getScores().then(response => {
      response.sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map((game, i) => {
          const text = `${i + 1}. ${game[0]} --- ${game[1]}`;
          this.add.text(config.width / 2, 200 + i*50, text, {
            fontFamily: 'monospace',
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