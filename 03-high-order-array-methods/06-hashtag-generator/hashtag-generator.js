 function generateHashtag(str) {
if (str.trim === '') {
  return false;
 }

const words = str.trim().split(/\s+/);

 const capitalize = words.map(
   (word) => word.charAt(0).toUpperCase() + word.slice(1)
 );

 const hashtag = `#${capitalize.join('')}`;

 return hashtag.length > 140 ? false : hashtag;
 }

const generateHashtag = (str) => {
  if (str.length === 1 || str.length > 140) {
    return false;
  }

  const hashtag = str.split(' ').reduce((tag, word) => {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');
  return hashtag;
};

module.exports = generateHashtag;
