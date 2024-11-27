import { swapCases } from './swap-cases';

describe('swapCases', () => {
  it('swapCases("Hello World") should return a value type a string', () => {
    expect(typeof swapCases('Hello World')).toBe('string');
  });

  it('swapCases("Hello World") should return hELLO wORLD', () => {
    expect(swapCases('Hello World')).toBe('hELLO wORLD');
  });

  it('swapCases("aBcDeF") should return AbCdEf', () => {
    expect(swapCases('aBcDeF')).toBe('AbCdEf');
  });
});
