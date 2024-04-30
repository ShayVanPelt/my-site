import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }

  return (
    <div className="app">
      <header className="App-header">
        <h1>Coming soon.... in the mean time enjoy this counter</h1>
        <div className="this">
          <span className="counter__output">{counter}</span>
          <button className="control__btn" onClick={increase}>+</button>
          <button className="control__btn" onClick={decrease}>-</button>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      </header>
    </div>
    
  );
}

export default App;
