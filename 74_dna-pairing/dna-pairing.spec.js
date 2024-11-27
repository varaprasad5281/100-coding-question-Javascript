import { DNAPairing } from './dna-pairing';

describe('DNAPairing', () => {
  it('DNAPairing("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', () => {
    expect(JSON.stringify(DNAPairing('ATCGA'))).toBe('[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]');
  });

  it('DNAPairing("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', () => {
    expect(JSON.stringify(DNAPairing('TTGAG'))).toBe('[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]');
  });

  it('DNAPairing("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', () => {
    expect(JSON.stringify(DNAPairing('CTCTA'))).toBe('[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]');
  });
});
