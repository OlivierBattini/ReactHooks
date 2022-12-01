import React, { FormEvent, useCallback, useMemo, useState } from 'react';

export function UseMemoComponent() {
  const [ myNumber, setMyNumber ] = useState(1);

  const factorial = useCallback(
    (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1)),
    []
  );

  const memoizedFactorial = useMemo<number>(
    () => factorial(myNumber),
    [myNumber, factorial]
  );

  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    setMyNumber(parseInt(event.currentTarget.value));
  };
  
  return (<>
    <h2>useMemo & useCallback</h2>
    <input type="number" onChange={onInputChange} defaultValue={1} />
    <span>Factorial: {memoizedFactorial}</span>
  </>);
}