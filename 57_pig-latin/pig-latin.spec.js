import { pigLatin } from './pig-latin';

describe('pigLatin', () => {
  it('pigLatin("california") should return "aliforniacay"', () => {
    expect(pigLatin('california')).toBe('aliforniacay');
  });

  it('pigLatin("paragraphs") should return "aragraphspay"', () => {
    expect(pigLatin('paragraphs')).toBe('aragraphspay');
  });

  it('pigLatin("glove") should return "oveglay"', () => {
    expect(pigLatin('glove')).toBe('oveglay');
  });

  it('pigLatin("algorithm") should return "algorithmway"', () => {
    expect(pigLatin('algorithm')).toBe('algorithmway');
  });

  it('pigLatin("eight") should return "eightway"', () => {
    expect(pigLatin('eight')).toBe('eightway');
  });
});
