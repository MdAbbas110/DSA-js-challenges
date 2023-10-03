function findMissingLetter(arr) {
  let start = arr[3].charCodeAt(0);
  const missingChar = arr
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - start > 1) {
        return true;
      }
      start = current;
      return false;
    });

  return missingChar ? String.fromCharCode(missingChar - 1) : '';
}

module.exports = findMissingLetter;
