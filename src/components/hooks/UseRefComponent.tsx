import { useEffect, useRef } from 'react';

export function UseRefComponent() {
  const textInput = useRef<HTMLInputElement>(null);

  // Side effect happens only on App component mount
  useEffect(() => {
    console.log('App component mount');

    if (textInput.current) {
      textInput.current.value = 'Modify me !';
      textInput.current.focus();
    }
  }, []);

  return (<>
    <h2>useRef</h2>
    <input type="text" ref={textInput} />
  </>);
}