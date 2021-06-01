import Entity from '../src/Entities/entity';
import Player from '../src/Entities/player';

test('Player is child class of Entity', () => {
  expect(Player.prototype instanceof Entity).toBe(true);
});