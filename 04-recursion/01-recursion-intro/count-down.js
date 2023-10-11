function countDown(num) {
  if (num <= 0) {
    console.log('all Done');
    return;
  }

  num--;
  console.log(num);
  countDown(num);
}

module.exports = countDown;
