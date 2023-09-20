// function areAllCharactersUnique(str) {
//   const letters = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (letters[char]) {
//       return false;
//     }
//     letters[char] = true;
//   }
//   return true;
// }

const areAllCharactersUnique = (str) => {
  const unique = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (unique.has(char)) {
      return false;
    }
    unique.add(char);
  }
  return true;
};

module.exports = areAllCharactersUnique;
