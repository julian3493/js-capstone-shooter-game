import 'phaser';
import ScrollingBackground from '../Entities/scrollingBackground';
import { resetLocalScore, getLocalScore } from '../Config/localStorage';
import { postScore, getScores } from '../Config/scoresAPI';
import config from '../Config/config';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    })
    this.title.setOrigin(0.5);

    let playerScore = getLocalScore()

    this.message = this.add.text(this.game.config.width*0.375, 200, `Your Score: ${playerScore}`)
  }
  
  update() {
    // for (var i = 0; i < this.backgrounds.length; i++) {
    //   this.backgrounds[i].update();
    // }
  }
}