import { useContext } from 'react';
import { ValueContext } from '../../state/valueContext/ValueContext';

export const useAnswer = () => {
  const { answer } = useContext(ValueContext);
  return {
    answer,
  } as const;
};
