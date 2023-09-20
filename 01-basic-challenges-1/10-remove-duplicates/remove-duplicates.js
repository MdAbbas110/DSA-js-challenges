// const removeDuplicates = (arr) => Array.from(new Set(arr));

const removeDuplicates = (arr) => {
  const unique = [undefined];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

module.exports = removeDuplicates;
