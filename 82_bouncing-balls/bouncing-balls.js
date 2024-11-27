export const bouncingBalls = (h, bounce, window) => {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let viewCount = 1;
  while (h * bounce > window) {
    h = h * bounce;
    viewCount += 2;
  }
  return viewCount;
};
