import 'phaser';
import { resetLocalScore, getLocalScore } from '../Config/localStorage';
import { postScore } from '../Config/scoresAPI';
import config from '../Config/config';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  createForm(score) {
    const form = document.createElement('form');
    const textInput = document.createElement('input');
    const submitButton = document.createElement('button');
    const bodyTag = document.getElementsByTagName('body')[0];
    submitButton.type = 'submit';
    submitButton.id = 'submit-button';
    submitButton.innerHTML = 'Submit';
    submitButton.classList.add('submit-button');
    textInput.type = 'text';
    textInput.name = 'name';
    textInput.placeholder = 'Type your name to submit your score';
    textInput.classList.add('text-input');
    form.id = 'user-form';
    form.append(textInput);
    form.append(submitButton);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.player = textInput.value;
      if (this.player) {
        // postScore(this.player, score);
        this.scene.start("Highscore");
      }
    });
    bodyTag.append(form);
    return form;
  }

  create() {
    this.title = this.add.text(config.width * 0.5, 128, "GAME OVER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    })
    this.title.setOrigin(0.5);

    let playerScore = getLocalScore();
    resetLocalScore();

    this.message = this.add.text(config.width*0.375, 200, `Your Score: ${playerScore}`);

    const form = this.createForm(playerScore);
    const element = this.add.dom(this.game.config.width * 0.5, -200, form);
    element.setDepth(3);
  }
}