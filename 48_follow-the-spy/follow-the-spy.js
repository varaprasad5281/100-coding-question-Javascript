export const followTheSpy = (routes) => {
  const map = {};
  for (const [from, to] of routes) {
    map[from] = to;
  }

  let current = 'USA';
  const result = [current];

  while (map[current]) {
    current = map[current];
    result.push(current);
  }

  return result.join(', ');
};
