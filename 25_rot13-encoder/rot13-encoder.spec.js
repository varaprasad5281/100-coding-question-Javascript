import { rot13Encoder } from './rot13-encoder';

describe('rot13Encoder', () => {
  it('rot13Encoder("") should return a string', () => {
    expect(typeof rot13Encoder('')).toBe('string');
  });

  it('rot13Encoder("FREE PIZZA!") should encode to "SERR CVMMN!"', () => {
    expect(rot13Encoder('FREE PIZZA!')).toBe('SERR CVMMN!');
  });

  it('rot13Encoder("LOVE?") should encode to "YBIR?"', () => {
    expect(rot13Encoder('LOVE?')).toBe('YBIR?');
  });

  it('rot13Encoder("Hello World!") should encode to "Uryyb Jbeyq!"', () => {
    expect(rot13Encoder('LOVE?')).toBe('YBIR?');
  });
});
