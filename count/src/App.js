import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCounter] = useState(0);
 
  const inc =()=>{
    if(count<=20){
      setCounter((prev)=> prev+1);
    }
  }

  const dec =()=>{
    if(count>=0){
      setCounter((prev)=> prev-1);
    }
  }

  return(
    <>
    <h1>Counter Value:{count}</h1>
    <br></br>
    <button
    onClick={inc}
    >INCREMENT</button>
    <br>
    </br>
    <button
    onClick={dec}
    >DECREMENT</button>
    </>
  );
}

export default App;
