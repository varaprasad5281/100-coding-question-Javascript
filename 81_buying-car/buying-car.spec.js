import { buyingCar } from './buying-car';

describe('buyingCar', () => {
  it('buyingCar(2000, 8000, 1000, 1.5) should return [6, 766]', () => {
    const result = buyingCar(2000, 8000, 1000, 1.5);

    expect(result[0]).toBe(6);
    expect(result[1]).toBe(766);
  });

  it('buyingCar(12000, 8000, 1000, 1.5)  should return [0, 4000]', () => {
    const result = buyingCar(12000, 8000, 1000, 1.5);

    expect(result[0]).toBe(0);
    expect(result[1]).toBe(4000);
  });
});
