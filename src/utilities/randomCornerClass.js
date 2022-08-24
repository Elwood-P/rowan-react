import seedrandom from 'seedrandom';

// Random rounded corner generator - always generates same corner for given id
const randomCornerClass = (id) => {
  const rng = seedrandom(id);
  const cornerClasses = ['tl', 'tr', 'br', 'bl'];
  const cornerNum = Math.abs(rng.int32()) % 4;
  const cornerClass = cornerClasses[cornerNum];
  return cornerClass;
};

export default randomCornerClass;
