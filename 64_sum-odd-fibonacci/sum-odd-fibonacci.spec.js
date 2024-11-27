import { sumOddFibonacci } from './sum-odd-fibonacci';

describe('sumOddFibonacci', () => {
  it('sumOddFibonacci(1) should return a number', () => {
    expect(typeof sumOddFibonacci(1)).toBe('number');
  });

  it('sumOddFibonacci(1000) should return 1785', () => {
    expect(sumOddFibonacci(1000)).toBe(1785);
  });

  it('sumOddFibonacci(4000000) should return 4613732', () => {
    expect(sumOddFibonacci(4000000)).toBe(4613732);
  });

  it('sumOddFibonacci(4) should return 5', () => {
    expect(sumOddFibonacci(1000)).toBe(1785);
  });

  it('sumOddFibonacci(75024) should return 60696', () => {
    expect(sumOddFibonacci(75024)).toBe(60696);
  });

  it('sumOddFibonacci(75025) should return 135721', () => {
    expect(sumOddFibonacci(75025)).toBe(135721);
  });
});
