import Phaser from 'phaser';
import config from '../Config/config';
import btn1 from '../assets/blue_button02.png';
import btn2 from '../assets/blue_button03.png';
import logo from '../assets/logo.png';
import box from '../assets/grey_box.png';
import blueBox from '../assets/blue_boxCheckmark.png';
import music from '../assets/TownTheme.mp3';
import sprBg0 from '../assets/sprBg0.png';
import sprBg1 from '../assets/sprBg1.png';
import sprExplosion from '../assets/sprExplosion.png';
import sprEnemy0 from '../assets/sprEnemy0.png';
import sprEnemy1 from '../assets/sprEnemy1.png';
import sprEnemy2 from '../assets/sprEnemy2.png';
import sprLaserEnemy0 from '../assets/sprLaserEnemy0.png';
import sprLaserPlayer from '../assets/sprLaserPlayer.png';
import sprPlayer from '../assets/sprPlayer.png';
import sndExplode0 from '../assets/sndExplode0.wav';
import sndExplode1 from '../assets/sndExplode1.wav';
import sndLaser from '../assets/sndLaser.wav';
import sndBtnOver from '../assets/sndBtnOver.wav';
import sndBtnDown from '../assets/sndBtnDown.wav';
import sprBtnRestart from '../assets/sprBtnRestart.png';
import sprBtnRestartHover from '../assets/sprBtnRestartHover.png';
import sprBtnRestartDown from '../assets/sprBtnRestartDown.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    // add logo image
    this.add.image(config.width / 2, config.height / 2, 'logo');

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(90, 300, 300, 30);

    const { width } = config;
    const { height } = config;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(90, 300, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
      console.log(file);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      console.log('completed');
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(300, this.ready, [], this);

    // load assets needed in our game
    this.load.image('blueButton1', btn1);
    this.load.image('blueButton2', btn2);
    this.load.image('phaserLogo', logo);
    this.load.image('box', box);
    this.load.image('checkedBox', blueBox);
    this.load.audio('bgMusic', music);

    // load game scene assets
    this.load.image('sprBg0', sprBg0);
    this.load.image('sprBg1', sprBg1);
    this.load.spritesheet('sprExplosion', sprExplosion, {
      frameWidth: 32,
      frameHeight: 32,
    });
    // this.load.spritesheet("sprEnemy0", sprEnemy0, {
    //   frameWidth: 16,
    //   frameHeight: 16
    // });
    this.load.image('sprEnemy0', sprEnemy0);
    this.load.image('sprEnemy1', sprEnemy1);
    this.load.image('sprEnemy2', sprEnemy2);
    // this.load.spritesheet("sprEnemy2", sprEnemy2, {
    //   frameWidth: 16,
    //   frameHeight: 16
    // });
    this.load.image('sprLaserEnemy0', sprLaserEnemy0);
    this.load.image('sprLaserPlayer', sprLaserPlayer);
    // this.load.spritesheet("sprPlayer", sprPlayer, {
    //   frameWidth: 16,
    //   frameHeight: 16
    // });
    this.load.image('sprPlayer', sprPlayer);
    this.load.audio('sndExplode0', sndExplode0);
    this.load.audio('sndExplode1', sndExplode1);
    this.load.audio('sndLaser', sndLaser);

    // gameOver assets
    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);
    this.load.image('sprBtnRestart', sprBtnRestart);
    this.load.image('sprBtnRestartHover', sprBtnRestartHover);
    this.load.image('sprBtnRestartDown', sprBtnRestartDown);
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}