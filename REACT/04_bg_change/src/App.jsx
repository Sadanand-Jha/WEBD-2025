import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color, setcolor] = useState('olive');
  return (
    <>
      <div className="container h-screen w-full" style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center  h-screen w-full inset-12 rounded-2xl bottom-12' >
          <div>
            <button className="border-2" onClick={() => setcolor('yellow')}>
            Yellow
          </button>
          </div>
          <div>
            <button className="border-2" onClick={() => setcolor('red')}>Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
