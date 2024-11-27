export const DNAPairing = (dna) => {
    const basePairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C',
    };

    const result = [];
    for (let i = 0; i < dna.length; i++) {
        const char = dna[i];
        const base = basePairs[char];
        result.push([char, base]);
    }
    return result;
};

