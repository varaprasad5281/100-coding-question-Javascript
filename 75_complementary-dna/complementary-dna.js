export const complementaryDNA = (dna) => {
  const basePairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  let complementaryDna = '';
  for (let i = 0; i < dna.length; i++) {
    const complement = basePairs[dna[i]];
    complementaryDna += complement;
  }

  return complementaryDna;
};
