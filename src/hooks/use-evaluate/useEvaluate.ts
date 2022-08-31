import { useContext } from 'react';
import { operators } from '../../global/utils/constants';
import { ValueContext } from '../../state/valueContext/ValueContext';
import { useCalculate } from '../use-calculate/useCalculate';
import { useCheckExpression } from '../use-checkExpression/useCheckExpression';
import { useCheckOperator } from '../use-checkOperator/useCheckOperator';
import { useCleanAnswer } from '../use-cleanAnswer/useCleanAnswer';
import { useTokenizer } from '../use-tokenizer/useTokenizer';

export const useEvaluate: any = () => {
  const { queue: arr } = useContext(ValueContext);
  const { cleanAnswer } = useCleanAnswer();
  const { tokenizer } = useTokenizer();
  const { checkOperator } = useCheckOperator();
  const { checkExpression } = useCheckExpression();
  const { calculate } = useCalculate();
  const { queue } = useContext(ValueContext);

  const Evaluate: any = (arr: string[]) => {
    try {
      checkExpression();
      if (arr.length === 1) {
        return arr[0];
      }
      operators.map((item) => {
        arr.map((input, index, givenArray) => {
          let firstOperand;
          let firstOperandIndex;
          let operator;
          let secondOperand;
          let secondOperandIndex;

          if (input[0].includes(item)) {
            switch (input[0]) {
              case '/':
                if (index > 0) {
                  //Store the indexes of the first and second operand, the operands have operators
                  firstOperandIndex = index - 1;
                  secondOperandIndex = index;

                  //pass the operands to the  check operator function which returns a clean string
                  let operand = checkOperator(givenArray[firstOperandIndex]);
                  firstOperand = parseFloat(operand);

                  //get the items without the first item, first item is the operator
                  secondOperand = parseFloat(input.substring(1));

                  operator = input[0];

                  //pass the operands and operator to the calculate function
                  let answer: number = calculate(
                    firstOperand,
                    operator,
                    secondOperand
                  );

                  //replace the first operand in the array with the answer, modify the actual array
                  //If the second item does not contain an operator then replace it with the answer
                  //If the second item contains an operator then append the answer to the operator
                  if (
                    arr[firstOperandIndex].includes('*') ||
                    arr[firstOperandIndex].includes('/') ||
                    arr[firstOperandIndex].includes('+') ||
                    arr[firstOperandIndex].includes('-')
                  ) {
                    arr[firstOperandIndex] =
                      arr[firstOperandIndex][0] + answer?.toString();
                  } else {
                    arr[firstOperandIndex] = answer?.toString();
                  }

                  //remove second operand from array, the operands include the operators
                  arr.splice(index, 1);
                }

                break;

              case '*':
                if (index > 0) {
                  firstOperandIndex = index - 1;
                  secondOperandIndex = index;

                  let operand = checkOperator(givenArray[firstOperandIndex]);
                  firstOperand = parseFloat(operand);

                  secondOperand = parseFloat(input.substring(1));
                  operator = input[0];

                  let answer = calculate(firstOperand, operator, secondOperand);

                  if (
                    arr[firstOperandIndex].includes('*') ||
                    arr[firstOperandIndex].includes('/') ||
                    arr[firstOperandIndex].includes('+') ||
                    arr[firstOperandIndex].includes('-')
                  ) {
                    arr[firstOperandIndex] =
                      arr[firstOperandIndex][0] + answer?.toString();
                  } else {
                    arr[firstOperandIndex] = answer?.toString();
                  }

                  arr.splice(index, 1);
                }
                console.log(arr);
                break;

              case '+':
                if (index > 0) {
                  firstOperandIndex = index - 1;
                  secondOperandIndex = index;

                  let operand = checkOperator(givenArray[firstOperandIndex]);
                  firstOperand = parseFloat(operand);

                  secondOperand = parseFloat(input.substring(1));
                  operator = input[0];

                  let answer = calculate(firstOperand, operator, secondOperand);

                  if (
                    arr[firstOperandIndex].includes('*') ||
                    arr[firstOperandIndex].includes('/') ||
                    arr[firstOperandIndex].includes('+') ||
                    arr[firstOperandIndex].includes('-')
                  ) {
                    arr[firstOperandIndex] =
                      arr[firstOperandIndex][0] + answer?.toString();
                  } else {
                    arr[firstOperandIndex] = answer?.toString();
                  }

                  arr.splice(index, 1);
                }

                break;

              case '-':
                if (index > 0) {
                  firstOperandIndex = index - 1;
                  secondOperandIndex = index;

                  let operand = checkOperator(givenArray[firstOperandIndex]);
                  firstOperand = parseFloat(operand);

                  secondOperand = parseFloat(tokenizer(input.substring(1)));
                  console.log('154: ', secondOperand);
                  operator = input[0];

                  let answer = calculate(firstOperand, operator, secondOperand);

                  if (
                    arr[firstOperandIndex].includes('*') ||
                    arr[firstOperandIndex].includes('/') ||
                    arr[firstOperandIndex].includes('+') ||
                    arr[firstOperandIndex].includes('-')
                  ) {
                    arr[firstOperandIndex] =
                      arr[firstOperandIndex][0] + answer?.toString();
                  } else {
                    arr[firstOperandIndex] = answer?.toString();
                  }

                  arr.splice(index, 1);
                }
                break;

              default:
                break;
            }
          }
        });
      });

      if (arr.length === 1) {
        arr[0] = cleanAnswer(arr[0]);
      }

      return parseFloat(Evaluate(arr));
    } catch (error: any) {
      return error.message;
    }
  };

  return { Evaluate } as const;
};
