export const rowWeights = (inputArr) => {
  const [team1Total, team2Total] = inputArr.reduce((teamTotals, currentValue, index) => {
    teamTotals[index % 2] += currentValue;
    return teamTotals;
  }, [0, 0]);

  return [team1Total, team2Total];
};

