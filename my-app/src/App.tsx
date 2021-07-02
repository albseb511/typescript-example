import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Component/Button';
import Counter from './Component/Counter';
import Todo from './Component/Todo/Todo';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Todo />
    </div>
  );
}

export default App;
