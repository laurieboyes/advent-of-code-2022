function fitsInOneBox(boxes) {
  type Box = {
    l: number;
    w: number;
    h: number;
  };

  const getBoxNumber = (box: Box) => parseInt(`${box.l}${box.w}${box.h}`);

  const sortedBoxes = boxes.sort((a, b) => getBoxNumber(a) - getBoxNumber(b));

  const boxFitsInBox = (innerBox: Box, outerBox: Box): boolean => {
    const dimensionFit = (dimensionKey: 'l' | 'w' | 'h') => {
      return innerBox[dimensionKey] < outerBox[dimensionKey];
    };
    return dimensionFit('l') && dimensionFit('w') && dimensionFit('h');
  };

  for (let i = 1; i < sortedBoxes.length; i++) {
    if (!boxFitsInBox(sortedBoxes[i - 1], sortedBoxes[i])) {
      return false;
    }
  }
  return true;
}

export default fitsInOneBox;
