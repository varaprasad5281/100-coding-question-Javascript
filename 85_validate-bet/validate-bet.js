export const validateBet = (gameType, textMessage) => {
  const [N, M] = gameType;

  const numbers = textMessage
    .split(/[,\s]+/)
    .map(Number)
    .filter((num) => {
      return num >= 1 && num <= M;
    });

  if (new Set(numbers).size !== N) {
    return null;
  }

  return numbers.sort((a, b) => a - b);
};
