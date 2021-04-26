import 'phaser';
import logo from '../assets/logo.png';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    this.load.image('logo', logo);
  }
 
  create () {
    this.add.image(400, 300, 'logo');
  }
};