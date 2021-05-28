import Entity from '../src/Entities/entity';
import CarrierShip from '../src/Entities/carrierShip';

test('CarrierShip is child class of Entity', () => {
  expect(CarrierShip.prototype instanceof Entity).toBe(true);
});