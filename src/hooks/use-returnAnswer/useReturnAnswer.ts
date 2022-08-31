import { useContext } from 'react';
import { ValueContext } from '../../state/valueContext/ValueContext';
import { useEvaluate } from '../use-evaluate/useEvaluate';
import { useQueue } from '../use-queue/useQueue';

export const useReturnAnswer = () => {
  const { Evaluate } = useEvaluate();
  const { expression, setAnswer, token, setToken, setQueue, queue } =
    useContext(ValueContext);

  console.log(token);

  const onReturn = () => {
    // setQueue([...queue, token]);
    if (!expression) setAnswer(0);

    if (
      queue.length < 1 &&
      expression.length > 0 &&
      !Number.isNaN(parseInt(expression))
    ) {
      // const newQueue = [...queue, token];
      // console.log('new: ', newQueue);

      setQueue([...queue, token]);
      console.log(token);

      setAnswer(parseFloat(expression));
    }
    const newQueue = [...queue, token];

    setQueue(() => {
      return newQueue;
    });

    setToken('');
    const evaluated = Evaluate(newQueue);
    console.log(evaluated);
    setAnswer(evaluated);
    setQueue([]);
  };

  return {
    onReturn,
  } as const;
};
