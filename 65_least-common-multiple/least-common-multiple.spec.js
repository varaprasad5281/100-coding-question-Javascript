import { leastCommonMultiple } from './least-common-multiple';

const cases = [
  { a: 6, b: 4, result: 12 },
  { a: 21, b: 6, result: 42 },
  { a: 48, b: 180, result: 720 },
  { a: 3, b: 7, result: 21 },
];

describe('Least common multiple function', () => {
  it('should return correct values for series of cases', () => {
    cases.forEach(({ a, b, result }) => {
      expect(leastCommonMultiple(a, b)).toBe(result);
    });
  });
});
