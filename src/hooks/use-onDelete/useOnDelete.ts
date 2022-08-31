import { useContext } from 'react';
import { ValueContext } from '../../state/valueContext/ValueContext';

export const useOnDelete = () => {
  const { expression, setExpression } = useContext(ValueContext);

  const onDelete = () => {
    if (expression === '') setExpression('');
    setExpression(expression.slice(0, -1));
  };

  return { onDelete } as const;
};
