import React, { useEffect, useState } from 'react';
import init, { add } from "wasm-lib";
import logo from './tammy.svg';
import './App.css';

function App() {
  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setAns(add(1, 1));
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Rust-Wasm-React</h1>
        <h2>this math is done with Rust!   <span>1 + 1 = {ans}</span></h2> 
        
      </header>
    </div>
  );
}

export default App;
