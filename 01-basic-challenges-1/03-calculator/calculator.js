function calculator(num1, num2, ops) {
  let result;
  switch (ops) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      throw new Error("invalid operators");
  }
  return result;
}

module.exports = calculator;
