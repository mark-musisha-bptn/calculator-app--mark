import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export const ValueContext = createContext<{
  expression: string;
  answer: number;
  error: String;
  queue: string[];
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  setExpression: Dispatch<SetStateAction<string>>;
  setAnswer: Dispatch<SetStateAction<number>>;
  setError: Dispatch<SetStateAction<string>>;
  setQueue: Dispatch<SetStateAction<string[]>>;
}>({
  expression: '',
  answer: 0,
  error: '',
  queue: [],
  token: '',
  setToken: () => '',
  setQueue: () => [],
  setExpression: () => '',
  setAnswer: () => 0,
  setError: () => '',
});

export const ValueProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [expression, setExpression] = useState('');
  const [error, setError] = useState('');
  const [answer, setAnswer] = useState(0);
  const [queue, setQueue] = useState<string[]>([]);
  const [token, setToken] = useState<string>('');

  return (
    <ValueContext.Provider
      value={{
        expression,
        answer,
        error,
        token,
        setToken,
        setExpression,
        setAnswer,
        setError,
        queue,
        setQueue,
      }}>
      {children}
    </ValueContext.Provider>
  );
};
