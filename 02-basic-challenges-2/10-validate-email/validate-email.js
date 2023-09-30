// function validateEmail(email) {
//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//   return emailRegex.test(email);
// }

function validateEmail(str) {
  if (str.indexOf('@') === -1) {
    return false;
  }

  const [local, domain] = str.split('@');

  if (local.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExtension = domain.split('.');

  if (domainExtension.length < 2 || domainExtension[1] < 2) {
    return false;
  }

  return true;
}

module.exports = validateEmail;
