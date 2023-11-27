function currying(a) {
  return function (b) {
    if (b) return currying(a + b);
    return a;
  };
}
