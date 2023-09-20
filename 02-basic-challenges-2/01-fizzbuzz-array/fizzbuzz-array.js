function fizzBuzzArray(num) {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      arr.push('fizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = fizzBuzzArray;
