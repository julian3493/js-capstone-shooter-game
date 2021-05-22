import 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }
 
  create () {
    // Game
    this.gameButton = new Button(this, config.width/2, config.height*0.2, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, config.width/2, config.height*0.4, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width/2, config.height*0.6, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    //Highscores
    this.creditsButton = new Button(this, config.width/2, config.height*0.8, 'blueButton1', 'blueButton2', 'Highscores', 'Highscore');
    this.model = this.sys.game.globals.model;

    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
};