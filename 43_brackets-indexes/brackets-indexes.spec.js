import { bracketsIndexes } from './brackets-indexes';

describe('bracketsIndexes', () => {
  it('should return correct values', () => {
    expect(bracketsIndexes('((1)23(45))(aB)', 1)).toBe(3);
    expect(bracketsIndexes('((1)23(45))(aB)', 2)).toBe(-1);
    expect(bracketsIndexes('((1)23(45))(aB)', 6)).toBe(9);
    expect(bracketsIndexes('((1)23(45))(aB)', 0)).toBe(10);
    expect(bracketsIndexes('((1)23(45))(aB)', 11)).toBe(14);
    expect(bracketsIndexes('(g(At)IO(f)(tM(qk)YF(n)Nr(E)))', 11)).toBe(28);
    expect(bracketsIndexes('(g(At)IO(f)(tM(qk)YF(n)Nr(E)))', 0)).toBe(29);
    expect(bracketsIndexes('(>_(va)`?(h)C(as)(x(hD)P|(fg)))', 19)).toBe(22);
  });
});
