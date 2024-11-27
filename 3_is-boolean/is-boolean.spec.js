import { isBoolean } from './is-boolean';

describe('isBoolean', () => {
  it('isBoolean(true) should return true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  it('isBoolean(false) should return true', () => {
    expect(isBoolean(false)).toBe(true);
  });

  it('isBoolean([1, 2, 3]) should return false', () => {
    expect(isBoolean([1, 2, 3])).toBe(false);
  });

  it('isBoolean([].slice) should return false', () => {
    expect(isBoolean([].slice)).toBe(false);
  });

  it('isBoolean({a: 1}) should return false', () => {
    expect(isBoolean({ a: 1 })).toBe(false);
  });

  it('isBoolean(1) should return false', () => {
    expect(isBoolean(1)).toBe(false);
  });

  it('isBoolean(NaN) should return false', () => {
    expect(isBoolean(NaN)).toBe(false);
  });

  it('isBoolean("a") should return false', () => {
    expect(isBoolean('a')).toBe(false);
  });

  it('isBoolean("true") should return false', () => {
    expect(isBoolean('true')).toBe(false);
  });

  it('isBoolean("false") should return false', () => {
    expect(isBoolean('false')).toBe(false);
  });
});
