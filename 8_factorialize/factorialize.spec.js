import { factorialize } from './factorialize';

describe('factorialize', () => {
  it('should return a number', () => {
    expect(typeof factorialize(5)).toBe('number');
  });

  it('factorialize(0) should return 1', () => {
    expect(factorialize(0)).toBe(1);
  });

  it('factorialize(5) should return 120', () => {
    expect(factorialize(5)).toBe(120);
  });

  it('factorialize(10) should return 3628800', () => {
    expect(factorialize(10)).toBe(3628800);
  });

  it('factorialize(20) should return 2432902008176640000', () => {
    expect(factorialize(20)).toBe(2432902008176640000);
  });
});
