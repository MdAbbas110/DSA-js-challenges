// function findMaxNumber(num) {
//   return Math.max(...num);
// }
let a = [23, 53, 33, 12, 24];
const findMaxNumber = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

module.exports = findMaxNumber;
