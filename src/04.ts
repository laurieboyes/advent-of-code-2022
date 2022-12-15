function fitsInOneBox(boxes) {
  if (boxes.length <= 1) {
    return true;
  }

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

  const boxFitsInBoxes = (box: Box, remainingBoxes: Box[]) => {
    if (remainingBoxes.length === 0) {
      return true;
    }
    const [nextBox, ...otherBoxes] = remainingBoxes;
    return boxFitsInBox(box, nextBox) && boxFitsInBoxes(box, otherBoxes);
  };

  for (const i of sortedBoxes.keys()) {
    const box = sortedBoxes[i];
    const biggerBoxes = sortedBoxes.slice(i + 1);
    if (!boxFitsInBoxes(box, biggerBoxes)) {
      return false;
    }
  };

  return true;
}

export default fitsInOneBox;
