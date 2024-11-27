import { validBraces } from './valid-braces';

describe('validBraces', () => {
  it('validBraces("(){}[]") should return true', () => {
    expect(validBraces('(){}[]')).toBe(true);
  });

  it('validBraces("([{}])") should return true', () => {
    expect(validBraces('([{}])')).toBe(true);
  });

  it('validBraces("(}") should return false', () => {
    expect(validBraces('(}')).toBe(false);
  });

  it('validBraces("[(])") should return false', () => {
    expect(validBraces('[(])')).toBe(false);
  });

  it('validBraces("[({})](]") should return false', () => {
    expect(validBraces('[({})](]')).toBe(false);
  });

  it('validBraces("]") should return false', () => {
    expect(validBraces(']')).toBe(false);
  });

  it('validBraces("[}]]") should return false', () => {
    expect(validBraces('[}]]')).toBe(false);
  });

  it('validBraces("[({])}") should return false', () => {
    expect(validBraces('[({])}')).toBe(false);
  });
});
