import { reverseString } from './reverse-string';

describe('reverseString', () => {
  it('reverseString("hello") should return a string', () => {
    expect(typeof reverseString('hello')).toBe('string');
  });

  it('reverseString("hello") should become "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('reverseString("Howdy") should become "ydwoH"', () => {
    expect(reverseString('Howdy')).toBe('ydwoH');
  });

  it('reverseString("Greetings from Earth") should return "htraE morf sgniteerG"', () => {
    expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
  });

  it('reverseString("foo bañana mañana") should return "anañam anañab oof"', () => {
    expect(reverseString('foo bañana mañana')).toBe('anañam anañab oof');
  });
});
