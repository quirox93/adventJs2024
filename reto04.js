function createXmasTree(height, ornament) {
  const whiteSpaces = "_".repeat(height - 1);
  const top = `${whiteSpaces}${ornament}${whiteSpaces}\n`;
  let middle = "";
  for (let i = 1; i < height; i++) {
    const spaces = "_".repeat(height - i - 1);
    const ornaments = ornament.repeat(2 * i + 1);
    middle += `${spaces}${ornaments}${spaces}\n`;
  }
  const bottom = `${whiteSpaces}#${whiteSpaces}\n${whiteSpaces}#${whiteSpaces}`;
  return top + middle + bottom;
}

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
