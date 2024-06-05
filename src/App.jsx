import './App.css';
import Counter from './assets/components/Counter';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  console.log(useState)

  return (
    <>
      <h1>React Counter</h1>
      <button
        onClick={() => {
        counter=0
        }}
      >
    Reset
      </button>
      <Counter counter={counter} setCounter={setCounter} />
      <button
          onClick={() => {
            setCounter(counter + 1); // counter = counter+1
          }}
        >
          +
        </button>

      <div>
        <p >{counter}</p>
        <button
          onClick={() => {
            setCounter(counter - 1); // counter = counter+1
          }}
        >
          -
        </button>
      </div>
  
    </>
  )
}

export default App
