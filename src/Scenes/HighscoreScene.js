import 'phaser';
import { getScores } from '../Config/scoresAPI';
import config from '../Config/config';
import Button from '../Objects/Button';


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
        .slice(0, 5)
        .map((game, i) => {
          const text = `${i + 1}. ${game[0]} --- ${game[1]}`;
          this.add.text(config.width / 2, 200 + i*30, text, {
            fontFamily: 'monospace',
            fontSize: '20px',
            color: '#31A2F2',
            align: 'center',
            lineHeight: '1.5',
          }).setOrigin(0.5, 0.5);
          return text;
        });
    });

    this.playAgainButton = new Button(this, config.width/2, config.height - 50, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
  }
}