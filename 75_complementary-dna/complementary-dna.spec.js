import { complementaryDNA } from './complementary-dna';

describe('complementaryDNA', () => {
  it('complementaryDNA("ATTGC") should return "TAACG"', () => {
    expect(complementaryDNA('ATTGC')).toBe('TAACG');
  });

  it('complementaryDNA("GTAT") should return "CATA"', () => {
    expect(complementaryDNA('GTAT')).toBe('CATA');
  });

  it('complementaryDNA("AAAA") should return TTTT', () => {
    expect(complementaryDNA('AAAA')).toBe('TTTT');
  });
});
