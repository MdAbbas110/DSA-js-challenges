function sumUpTo(num) {
  if (num === 1) {
    return 1;
  }

  return num + sumUpTo(num - 1);
}

const sumUp = (num) => {
    if (num === 1) {
      return 1
    }
  return num + sumUp(num -1 )
}

module.exports = sumUpTo;
