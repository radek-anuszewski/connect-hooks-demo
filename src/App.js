
import React from 'react';
import CounterHooksContainer from './features/counter/CounterHooksContainer';
import './App.css';
import CounterConnectContainer from "./features/counter/CounterConnectContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Connect version</h2>
        <CounterHooksContainer />
        <h2>Hooks version</h2>
        <CounterConnectContainer />
      </header>
    </div>
  );
}

export default App;
