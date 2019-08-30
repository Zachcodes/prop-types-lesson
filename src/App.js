import React from 'react';
import DisplayComponent from './components/DisplayComponent';

// Works fine when we pass a string
let name = 'John';
// breaks when we pass an object
// let name = { name: 'John' };
// not as obvious that there is something going wrong when we pass through a number prop
// let name = 2;
let numbers = [1, 2, 3];
// let numbers = [1, 2, '3'];

function App() {
  return (
    <div className="App">
      <DisplayComponent name={name} numbers={numbers} />
    </div>
  );
}

export default App;
