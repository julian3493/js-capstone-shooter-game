import Entity from '../src/Entities/entity';
import GunShip from '../src/Entities/gunShip';

test('GunShip is child class of Entity', () => {
  expect(GunShip.prototype instanceof Entity).toBe(true);
});