import React, { FormEvent, useEffect, useState } from 'react';

export function UseContextComponent() {
  const [ inputValue, setInputValue ] = useState<string>('Modify me !');

  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  // Side effect happens only when inputValue changes
  useEffect(() => {
    console.log(`inputValue changed to ${inputValue}`);
  }, [inputValue]);
  

  return (<>
    <h2>useContext</h2>
    <input type="text" onChange={onInputChange} defaultValue={inputValue} />
  </>);
}