// function formatPhoneNumber(numbers) {
//   const areaCode = numbers.slice(0, 3).join('');
//   const prefix = numbers.slice(3, 6).join('');
//   const lineNo = numbers.slice(6).join('');

//   return `(${areaCode}) ${prefix}-${lineNo}`;
// }

// const formatPhoneNumber = (num) => {
//   const formatted = num.join('');

//   return `(${formatted.substring(0, 3)}) ${formatted.substring(
//     3,
//     6
//   )}-${formatted.substring(6)}`;
// };

const formatPhoneNumber = (num) =>
  `(${num.slice(0, 3).join('')}) ${num.slice(3, 6).join('')}-${num
    .slice(6)
    .join('')}`;

module.exports = formatPhoneNumber;
