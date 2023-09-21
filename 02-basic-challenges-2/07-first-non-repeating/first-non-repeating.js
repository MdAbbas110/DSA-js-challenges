function findFirstNonRepeatingCharacter(str) {
  const charObj = {};

  for (let char of str) {
    charObj[char] = (charObj[char] || 0) + 1;
  }
  for (let char of str) {
    if (charObj[char] === 1) {
      return char;
    }
  }

  return charObj;
}

module.exports = findFirstNonRepeatingCharacter;
