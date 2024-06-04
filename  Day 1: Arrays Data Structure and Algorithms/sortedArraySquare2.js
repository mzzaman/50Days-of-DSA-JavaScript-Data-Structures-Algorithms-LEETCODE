function sortedSquared2(array) {
  if (array.length === 0) {
    return "Oops! Can't Sort or Square an Empty Array";
  }
  const newArray = new Array(array.length).fill(0);
  let minValue = 0;
  let maxValue = array.length - 1;

  for (let index = array.length - 1; index >= 0; index--) {
    const minValueSquare = Math.pow(array[minValue], 2);
    const maxValueSquare = Math.pow(array[maxValue], 2);

    if (minValueSquare > maxValueSquare) {
      newArray[index] = minValueSquare;
      minValue++;
    } else {
      newArray[index] = maxValueSquare;
      maxValue--;
    }
  }
  return newArray;
}

const display = [7, 9, 3, 5, 2, 4];
console.log(sortedSquared2(display));
