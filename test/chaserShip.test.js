import Entity from '../src/Entities/entity';
import ChaserShip from '../src/Entities/chaserShip';

test('Chasership is child class of Entity', () => {
  expect(ChaserShip.prototype instanceof Entity).toBe(true);
});