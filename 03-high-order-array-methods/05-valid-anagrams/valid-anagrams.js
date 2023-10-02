function validAnagrams(str1, str2) {
  const freqCunt1 = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCunt2 = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqCunt1).every(
    (char) => freqCunt1[char] === freqCunt2[char]
  );
}

module.exports = validAnagrams;
