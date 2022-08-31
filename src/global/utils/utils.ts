import { FALSE } from 'sass';
import { arrayBuffer } from 'stream/consumers';

interface IStack {
  STACK: Array<string>;
  push: (value: string) => void;
  pop: () => string | number | undefined;
  clear: () => void;
}

//first value is an operator
//previous value is an operator
//previous

//Get values from the stack, check if its a number

export class Stack implements IStack {
  STACK: string[] = [];
  givenNumber = '';
  private operators = [
    '+',
    '-',
    '*',
    '/',
    '(',
    ')',
    '.',
    'log',
    'lg',
    'sqrt',
    'exp',
    '=',
  ];

  private allowedSignVals = ['+', '-'];

  //push value on top of the stack
  push(value: string) {
    try {
      if (
        this.operators.includes(value) &&
        !this.allowedSignVals.includes(value) &&
        this.givenNumber === ''
      ) {
        console.log(value);
        console.log('STACK IS: ', this.STACK);
        console.log('error');

        return 'Syntax Error';
      }

      if (this.operators.includes(value) && this.givenNumber == '') {
        this.givenNumber = value;
        return;
      }

      if (value === '=' && this.givenNumber !== '') {
        this.STACK.push(this.givenNumber);
        this.givenNumber = '';
      }
      const parsedInt = parseFloat(value);

      // if(this.givenNumber === '-') {

      // }

      if (!isNaN(parsedInt)) {
        this.givenNumber += value;
        console.log(this.givenNumber, 'h');
      } else {
        if (!this.operators.includes(value)) {
          throw new Error('Syntax Error');
        }

        // if(this.givenNumber.length > 0 )

        if (this.givenNumber.length > 0) {
          this.STACK.push(this.givenNumber);

          this.givenNumber = '';
          if (this.operators.includes(value)) {
            this.givenNumber = value;
            return;
          }
          console.log(this.STACK);
        }
        this.STACK.push(value);
      }

      // console.log(`given value is: , ${value}, givenNumbers: ${givenNumber}`);

      console.log(this.STACK);
    } catch (error) {
      throw new Error('Syntax Error');
    }
  }

  //return value on top of the stack and pop it out of the array
  pop() {
    if (this.STACK.length > 0) {
      const stackValue = this.STACK.shift();
      return stackValue;
    }
    return 'No value in stack';
  }

  clear() {
    this.STACK = [];
    this.givenNumber = '';
    console.log(this.STACK);
  }

  calculate(firstOperand: number, secondOperand: number, operator: string) {
    console.log('calculate', firstOperand, secondOperand, operator);

    let answer = 0;
    switch (operator) {
      case '+':
        answer = firstOperand + secondOperand;
        console.log(answer);

        break;
      case '-':
        answer = firstOperand - secondOperand;
        console.log(answer);
        break;
      case '/':
        answer = firstOperand / secondOperand;
        console.log(answer);
        break;
      case '*':
        answer = firstOperand * secondOperand;
        console.log(answer);
        break;
    }

    return answer;
  }

  bodmas(digits: string[]): number {
    let final = 0;
    let answer = 0;

    if (digits.length === 1) {
      final = parseFloat(digits[0]);
    }

    for (let i = 0; i <= digits.length; i++) {
      if (digits[i].includes('/')) {
        let firstDigit = 0;
        let secondDigit = 0;

        if (this.operators.includes(digits[i - 1])) {
          if (digits[i - 1] !== '+' || digits[i - 1] !== '-') {
            firstDigit = parseFloat(digits[i - 1].slice(1));
            let operator = digits[i][0];
            digits[i - 1] = digits[i - 1][0];
            answer = this.calculate(firstDigit, secondDigit, operator);

            digits[i - 1] += answer;
            digits.splice(i, 1);
          }
        } else {
          firstDigit = parseFloat(digits[i - 1]);

          let operator = digits[i][0];
          digits[i - 1] = digits[i - 1][0];
          let second = digits[i].slice(1);
          secondDigit = parseFloat(second);
          answer = this.calculate(firstDigit, secondDigit, operator);

          digits[i - 1] = answer.toString();
          digits.splice(i, 1);

          if (digits.length === 1) {
            answer = parseFloat(digits[0]);
            return answer;
          }
          this.bodmas(digits);
        }

        this.bodmas(digits);
      }

      if (digits[i].includes('*')) {
        let firstDigit = 0;
        let secondDigit = 0;

        if (this.operators.includes(digits[i - 1])) {
          if (digits[i - 1] !== '+' || digits[i - 1] !== '-') {
            firstDigit = parseFloat(digits[i - 1].slice(1));
            let operator = digits[i][0];
            digits[i - 1] = digits[i - 1][0];
            answer = this.calculate(firstDigit, secondDigit, operator);

            digits[i - 1] += answer;
            digits.splice(i, 1);
          }
        } else {
          firstDigit = parseFloat(digits[i - 1]);

          let operator = digits[i][0];
          digits[i - 1] = digits[i - 1][0];
          let second = digits[i].slice(1);
          secondDigit = parseFloat(second);
          answer = this.calculate(firstDigit, secondDigit, operator);

          digits[i - 1] = answer.toString();
          digits.splice(i, 1);
        }

        if (digits.length === 1) {
          answer = parseFloat(digits[0]);
          return answer;
        }
        this.bodmas(digits);
      }
      if (digits[i].includes('+')) {
        let firstDigit = 0;
        let secondDigit = 0;

        if (this.operators.includes(digits[i - 1])) {
          if (digits[i - 1] !== '+' || digits[i - 1] !== '-') {
            firstDigit = parseFloat(digits[i - 1].slice(1));
            let operator = digits[i][0];
            digits[i - 1] = digits[i - 1][0];
            answer = this.calculate(firstDigit, secondDigit, operator);

            digits[i - 1] += answer;
            digits.splice(i, 1);
          }
        } else {
          firstDigit = parseFloat(digits[i - 1]);

          let operator = digits[i][0];
          digits[i - 1] = digits[i - 1][0];
          let second = digits[i].slice(1);
          secondDigit = parseFloat(second);
          answer = this.calculate(firstDigit, secondDigit, operator);

          digits[i - 1] = answer.toString();
          digits.splice(i, 1);
        }
        if (digits.length === 1) {
          answer = parseFloat(digits[0]);
          return answer;
        }
        this.bodmas(digits);
      }

      if (digits[i].includes('-') && digits[i - 1]) {
        let firstDigit = 0;
        let secondDigit = 0;

        if (this.operators.includes(digits[i - 1])) {
          if (digits[i - 1] !== '+' || digits[i - 1] !== '-') {
            firstDigit = parseFloat(digits[i - 1].slice(1));
            let operator = digits[i][0];
            digits[i - 1] = digits[i - 1][0];
            answer = this.calculate(firstDigit, secondDigit, operator);

            digits[i - 1] += answer;
            digits.splice(i, 1);
          }
        } else {
          firstDigit = parseFloat(digits[i - 1]);

          let operator = digits[i][0];
          digits[i - 1] = digits[i - 1][0];
          let second = digits[i].slice(1);
          secondDigit = parseFloat(second);
          answer = this.calculate(firstDigit, secondDigit, operator);

          digits[i - 1] = answer.toString();
          digits.splice(i, 1);
        }
        if (digits.length === 1) {
          answer = parseFloat(digits[0]);
          return answer;
        }
        this.bodmas(digits);
      }
    }
    return final;
  }

  evaluate() {
    this.STACK.pop();

    return this.bodmas(this.STACK);
  }
}
