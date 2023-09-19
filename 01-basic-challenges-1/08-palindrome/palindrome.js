// function isPalindrome(str) {
//   let formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   let reversedStr = formattedString.split('').reverse().join('');

//   return formattedString === reversedStr;
// }

function isPalindrome(str) {
  let formattedString = removeAlpha(str.toLowerCase());
  let reversedStr = reverseString(formattedString);
  return formattedString === reversedStr;
}

function removeAlpha(str) {
  let formattedStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (replaceNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function replaceNumeric(char) {
  let code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || //numbers 0-9
    (code >= 97 && code <= 122) // alphabets a -z
  );
}

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i > 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

module.exports = isPalindrome;
