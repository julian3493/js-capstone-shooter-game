/**
 * @jest-environment jsdom
 */

import Entity from '../Entities/entity';
import ChaserShip from '../Entities/chaserShip';

test('ChaserShip is a subclass of Entity', () => {
  expect(ChaserShip.prototype instanceof Entity).toBe(true);
});