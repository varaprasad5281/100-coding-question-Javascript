const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one!',
  EAGLE: 'Eagle',
  BIRDIE: 'Birdie',
  PAR: 'Par',
  BOGEY: 'Bogey',
  DOUBLE_BOGEY: 'Double Bogey',
  GO_HOME: 'Go Home!',
};

function golfScore(par, strokes) {
  if (strokes === 1) {
    return GOLF_SCORES.HOLE_IN_ONE;
  } else if (strokes <= par - 2) {
    return GOLF_SCORES.EAGLE;
  } else if (strokes === par - 1) {
    return GOLF_SCORES.BIRDIE;
  } else if (strokes === par) {
    return GOLF_SCORES.PAR;
  } else if (strokes === par + 1) {
    return GOLF_SCORES.BOGEY;
  } else if (strokes === par + 2) {
    return GOLF_SCORES.DOUBLE_BOGEY;
  } else if (strokes >= par + 3) {
    return GOLF_SCORES.GO_HOME;
  }
}

export { golfScore, GOLF_SCORES };
