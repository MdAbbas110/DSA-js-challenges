const isValidIPv4 = (str) => {
  const ip = str.split('.');
  if (ip.length > 4) {
    return false;
  }
  return ip.every((octets) => {
    const num = parseInt(octets);
    return num >= 0 && num <= 255 && octets === num.toString();
  });
};

//Other way of doing it

function isValid(str) {
const ip = str.split('.');
  if (ip.length > 4) {
    return false;
    return ip.every((octets) => {
    const num = parseInt(octets);
    return num >= 0 && num <= 255 && octets === num.toString();
  });
}


module.exports = isValidIPv4;
