import Entity from '../src/Entities/entity';
import PlayerLaser from '../src/Entities/playerLaser';

test('PlayerLaser is child class of Entity', () => {
  expect(PlayerLaser.prototype instanceof Entity).toBe(true);
});