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
    return remainingBoxes.reduce((acc, otherBox) => {
      return acc && boxFitsInBox(box, otherBox);
    }, true);
  };

  return sortedBoxes.reduce((acc, box, i) => {
    const biggerBoxes = sortedBoxes.slice(i + 1);
    return acc && boxFitsInBoxes(box, biggerBoxes);
  }, true);
}

export default fitsInOneBox;
