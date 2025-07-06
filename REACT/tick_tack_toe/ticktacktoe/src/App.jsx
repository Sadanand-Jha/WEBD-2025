import React, { useState } from 'react'
import './App.css'


function Square({value, handleClick}){
  return (
    <button className="square" onClick={handleClick}>{value}</button>
  )
}

function App() {
  const [arr, setArr] = useState(Array(9).fill(null));
  const [XNext, setIsXNext] = useState(true);
  const [winner, SetWinner] = useState('');

  function handleClick(i){
    console.log("the winner is ", winner);
    if(arr[i] || winner){
      // SetWinner(isWinner(arr));
      return;
    }
    const newArr = arr.slice();
    newArr[i] = (XNext ? 'X': '0')
    setArr(newArr);
    setIsXNext(!XNext);
    if(isWinner(newArr)){
      SetWinner(isWinner(newArr));
      console.log("winner is ", winner);
      console.log("this line works");
      return;
    }
    // setValue('X');
  }

  return (
    <>
      <div>
          <Square value = {arr[0]} handleClick = {() => handleClick(0)}/>
          <Square value = {arr[1]} handleClick = {() => handleClick(1)}/>
          <Square value = {arr[2]} handleClick = {() => handleClick(2)}/>
      </div>
      <div>
          <Square value = {arr[3]} handleClick = {() => handleClick(3)}/>
          <Square value = {arr[4]} handleClick = {() => handleClick(4)}/>
          <Square value = {arr[5]} handleClick = {() => handleClick(5)}/>
      </div>
      <div>
          <Square value = {arr[6]} handleClick = {() => handleClick(6)}/>
          <Square value = {arr[7]} handleClick = {() => handleClick(7)}/>
          <Square value = {arr[8]} handleClick = {() => handleClick(8)}/>
      </div>


      <div style={{marginTop: '100px'}}>
          The winner is {winner ? winner: "_"}
      </div>
    </>
  )
}

function isWinner(arr){
  const list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < list.length; i++){
    
    const [a, b, c] = list[i];
    if(arr[a] && arr[a] == arr[b] && arr[a] == arr[c]){
      console.log("winner");
      console.log(arr[a]);
      return arr[a];
    }
  }

  return null;
}






export default App