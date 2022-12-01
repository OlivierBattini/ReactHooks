import { UseMemoComponent } from '../hooks/UseMemoComponent';
import { UseRefComponent } from '../hooks/UseRefComponent';
import { UseStateComponent } from '../hooks/UseStateComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks</h1>
        useEffect hook may be used by below components
      </header>
      <main>
        <UseRefComponent />
        <UseStateComponent />
        <UseMemoComponent />
      </main>
    </div>
  );
}

export default App;
