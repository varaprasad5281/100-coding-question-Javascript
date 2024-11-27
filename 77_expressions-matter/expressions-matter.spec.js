import { expressionsMatter } from './expressions-matter';

describe('expressionsMatter', () => {
  it('expressionsMatter(2, 1, 2) should return 6', () => {
    expect(expressionsMatter(2, 1, 2)).toBe(6);
  });

  it('expressionsMatter(2, 1, 1) should return 4', () => {
    expect(expressionsMatter(2, 1, 1)).toBe(4);
  });

  it('expressionsMatter(1, 1, 1) should return 3', () => {
    expect(expressionsMatter(1, 1, 1)).toBe(3);
  });

  it('expressionsMatter(1, 2, 3) should return 9', () => {
    expect(expressionsMatter(1, 2, 3)).toBe(9);
  });

  it('expressionsMatter(1, 3, 1) should return 5', () => {
    expect(expressionsMatter(1, 3, 1)).toBe(5);
  });

  it('expressionsMatter(2, 2, 2) should return 8', () => {
    expect(expressionsMatter(2, 2, 2)).toBe(8);
  });

  it('expressionsMatter(5, 1, 3) should return 20', () => {
    expect(expressionsMatter(5, 1, 3)).toBe(20);
  });

  it('expressionsMatter(3, 5, 7) should return 105', () => {
    expect(expressionsMatter(3, 5, 7)).toBe(105);
  });

  it('expressionsMatter(5, 6, 1) should return 35', () => {
    expect(expressionsMatter(5, 6, 1)).toBe(35);
  });

  it('expressionsMatter(1, 6, 1) should return 8', () => {
    expect(expressionsMatter(1, 6, 1)).toBe(8);
  });

  it('expressionsMatter(2, 6, 1) should return 14', () => {
    expect(expressionsMatter(2, 6, 1)).toBe(14);
  });

  it('expressionsMatter(6, 7, 1) should return 48', () => {
    expect(expressionsMatter(6, 7, 1)).toBe(48);
  });

  it('expressionsMatter(1, 8, 3) should return 27', () => {
    expect(expressionsMatter(1, 8, 3)).toBe(27);
  });

  it('expressionsMatter(9, 7, 2) should return 126', () => {
    expect(expressionsMatter(9, 7, 2)).toBe(126);
  });

  it('expressionsMatter(9, 1, 1) should return 18', () => {
    expect(expressionsMatter(9, 1, 1)).toBe(18);
  });

  it('expressionsMatter(10, 5, 6) should return 300', () => {
    expect(expressionsMatter(10, 5, 6)).toBe(300);
  });

  it('expressionsMatter(1, 10, 1) should return 12', () => {
    expect(expressionsMatter(1, 10, 1)).toBe(12);
  });
});
