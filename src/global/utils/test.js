function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '/':
      return firstOperand / secondOperand;
    case '*':
      return firstOperand * secondOperand;
  }
}

console.log(calculate(1, 2, '+'));
