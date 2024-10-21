import React from 'react';
import Greet from './components/Greeeting';
import Counter from './components/Counter';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name="Артём" />
      <Counter />
    </div>
  );
}

export default App;