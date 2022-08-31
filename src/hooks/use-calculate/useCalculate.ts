import React from 'react';

export const useCalculate = () => {
  function calculate(
    firstOperand: number,
    operator: string,
    secondOperand: number
  ) {
    console.log('215: ', firstOperand, operator, secondOperand);
    let answer = 0;
    switch (operator) {
      case '+':
        answer = firstOperand + secondOperand;
        break;
      case '-':
        console.log('221: ', firstOperand - secondOperand);

        answer = firstOperand - secondOperand;
        break;
      case '*':
        answer = firstOperand * secondOperand;
        break;
      case '/':
        answer = firstOperand / secondOperand;
        break;
    }
    return answer;
  }

  return { calculate } as const;
};
