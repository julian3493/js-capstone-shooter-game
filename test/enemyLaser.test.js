import Entity from '../src/Entities/entity';
import EnemyLaser from '../src/Entities/enemyLaser';

test('Enemylaser is child class of Entity', () => {
  expect(EnemyLaser.prototype instanceof Entity).toBe(true);
});