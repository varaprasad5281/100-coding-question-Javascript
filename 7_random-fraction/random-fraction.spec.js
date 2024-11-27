import { randomFraction } from './random-fraction';

describe('randomFraction', () => {
  it('should return a number', () => {
    expect(typeof randomFraction()).toBe('number');
  });

  it('should return decimal number', () => {
    expect(randomFraction() % 1).not.toBe(0);
  });

  it('should return random decimal number', () => {
    const n0 = randomFraction();

    expect(randomFraction()).not.toBe(n0);
  });
});
