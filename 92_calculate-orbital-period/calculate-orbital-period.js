const mu = 398600.4418;
const earthRadius = 6367.4447;

export const calculateOrbitalPeriod = (arr) => {
  const orbitalArr = [];

  for (let i = 0; i < arr.length; i++) {
    const avgAlt = arr[i].avgAlt;
    const a = avgAlt + earthRadius;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(a, 3) / mu));

    orbitalArr.push({ name: arr[i].name, orbitalPeriod });
  }

  return orbitalArr;
};
