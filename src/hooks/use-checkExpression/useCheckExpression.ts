import { useContext } from 'react';
import { ValueContext } from '../../state/valueContext/ValueContext';

export const useCheckExpression = () => {
  const { queue } = useContext(ValueContext);
  function checkExpression() {
    queue.forEach((item, index) => {
      if (index === 0 && isNaN(parseFloat(item))) {
        throw new Error('Syntax Error');
      }

      //   if (item.length > 1 && isNaN(parseFloat(item))) {
      //     console.log('throwing here');
      //     throw new Error('Syntax Error');
      //   }
    });
  }

  return { checkExpression } as const;
};
