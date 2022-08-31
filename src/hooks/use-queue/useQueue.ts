import { useContext } from 'react';
import { ValueContext } from '../../state/valueContext/ValueContext';

export const useQueue = () => {
  const { queue, setQueue } = useContext(ValueContext);

  function updateQueue(token: string) {
    setQueue([...queue, token]);
  }
  return {
    updateQueue,
  };
};
