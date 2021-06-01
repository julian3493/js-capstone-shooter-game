import Phaser from 'phaser';
import Entity from '../src/Entities/entity';

test('Entity is a subclass of Sprite', () => {
  expect(Entity.prototype instanceof Phaser.GameObjects.Sprite).toBe(true);
});