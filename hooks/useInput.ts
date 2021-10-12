import { useState } from 'react';

const useInput = (defaultState: string = ''): [
  value: string,
  setValue: (val: string) => void,
  error: boolean,
  setError: (val: boolean) => void
] => {
  const [value, setValueState] = useState<string>(defaultState);
  const [error, setErrorState] = useState<boolean>(false);

  const setValue = (val: string): void => {
    setValueState(val);
    setErrorState(false)
  };

  const setError = (val: boolean): void => {
    setErrorState(val);
  };

  return [
    value,
    setValue,
    error,
    setError
  ];
};

export default useInput;