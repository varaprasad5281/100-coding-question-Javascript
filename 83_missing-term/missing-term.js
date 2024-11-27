export const missingTerm = (sequence) => {
  let n = sequence.length;
  const commonDiff = (sequence[n - 1] - sequence[0]) / n;

  for (let i = 0; i < n - 1; i++) {
    if (sequence[i + 1] - sequence[i] !== commonDiff) {
      return sequence[i] + commonDiff;
    }
  }
};
