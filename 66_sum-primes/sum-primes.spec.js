import { sumPrimes } from './sum-primes';

describe('sumPrimes', () => {
  it('sumPrimes(10) should return number', () => {
    expect(typeof sumPrimes(10)).toBe('number');
  });

  it('sumPrimes(10) should return 17', () => {
    expect(sumPrimes(10)).toBe(17);
  });

  it('sumPrimes(977) should return 73156', () => {
    expect(sumPrimes(977)).toBe(73156);
  });
});
