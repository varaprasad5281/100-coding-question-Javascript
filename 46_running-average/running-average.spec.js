import { runningAverage } from './running-average';

describe('runningAverage', () => {
  const rAvg = runningAverage();

  it('should return a function', () => {
    expect(typeof rAvg).toBe('function');
  });

  it('should return 10)', () => {
    expect(rAvg(10)).toBe(10);
  });

  it('should return 10.5', () => {
    expect(rAvg(11)).toBe(10.5);
  });

  it('should return 11', () => {
    expect(rAvg(12)).toBe(11);
  });
});
