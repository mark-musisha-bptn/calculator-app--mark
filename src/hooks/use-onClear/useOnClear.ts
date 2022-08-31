import { useContext } from 'react';
import { ValueContext } from '../../state/valueContext/ValueContext';

export const useOnClear = () => {
  const { setAnswer, setExpression } = useContext(ValueContext);

  const onClear = (e: any) => {
    e.preventDefault();
    setExpression('');
    setAnswer(0);
  };

  return { onClear } as const;
};
