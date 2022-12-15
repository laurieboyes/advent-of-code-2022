//https://adventjs.dev/challenges/2022/4

function fitsInOneBox(boxes) {
  if (boxes.length <= 1) {
    return true;
  }

  type Box = {
    l: number;
    w: number;
    h: number;
  };

  const boxFitsInBox = (innerBox: Box, outerBox: Box): boolean => {
    const dimensionFit = (dimensionKey: 'l' | 'w' | 'h') =>
      innerBox[dimensionKey] < outerBox[dimensionKey];
    return dimensionFit('l') && dimensionFit('w') && dimensionFit('h');
  };

  const boxFitsInBoxes = (box: Box, remainingBoxes: Box[]) =>
    remainingBoxes.every((otherBox) => boxFitsInBox(box, otherBox));

  const getBoxSortKey = (box: Box) => parseInt(`${box.l}${box.w}${box.h}`);
  const sortedBoxes = boxes.sort((a, b) => getBoxSortKey(a) - getBoxSortKey(b));

  const elementsRemainingAfter = (arr, i) => arr.slice(i + 1);

  return sortedBoxes.every((box, i) =>
    boxFitsInBoxes(box, elementsRemainingAfter(sortedBoxes, i))
  );
}

export default fitsInOneBox;
