import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  function increment(){
    setCounter(counter + 1);
    setCounter(counter + 1);
  }
  function increment4(){
    setCounter(precounter => precounter + 1);
    setCounter(precounter => precounter + 1);
    setCounter(precounter => precounter + 1);
    setCounter(precounter => precounter + 1);
  }
  function decrement(){
    setCounter(counter - 1);
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={increment}>Increment {counter}</button>
      <button onClick={decrement}>Decrement {counter}</button>
      <button onClick={increment4}> 4 {counter}</button>
    </>
  )
}

export default App
