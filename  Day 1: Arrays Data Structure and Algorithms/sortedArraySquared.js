function sortedSquared(arr) {
  const newArray = new Array(arr.length).fill(0);

  for (let index = 0; index < arr.length; index++) {
    newArray[index] = Math.pow(arr[index], 2);
  }
  newArray.sort(function (a, b) {
    return a - b;
  });
  return newArray;
}
const display = [7, 9, 3, 5, 2, 4];
console.log(sortedSquared(display));
