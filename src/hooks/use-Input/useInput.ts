import React, { useContext, useEffect, useState } from 'react';
import { operators } from '../../global/utils/constants';
import { ValueContext } from '../../state/valueContext/ValueContext';
import { useReturnAnswer } from '../use-returnAnswer/useReturnAnswer';

export const useInput = () => {
  const { setExpression, expression, setQueue, queue, token, setToken } =
    useContext(ValueContext);

  const onValueChange = (e: any) => {
    const { value } = e.target;
    setExpression(expression + value);
    if (!token) {
      setToken(token + value);
    } else if (token.length >= 1 && operators.includes(value)) {
      console.log('Operators include the: ', value);
      setQueue([...queue, token]);
      setToken(value);
    } else {
      setToken(token + value);
    }
  };

  return {
    onValueChange,
    expression,
  } as const;
};
