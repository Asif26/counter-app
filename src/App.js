import React, {useState} from 'react';
import Message from './mesage.js'
import './App.css'

function App(){
  let [count,setCount]=useState(0);
  let [isMorning,setMorning]= useState();

  return(
    <div className={`box  ${isMorning ? 'dayLight' : ''} `}>
      
      <Message counter={count}/>
      <br />
      <h1>This is a Day = {isMorning ? 'Morning': 'night'}</h1>
      <button onClick={() => setCount(++count)}> Add Number </button>
      <button onClick={() => setMorning(!isMorning)}> Update </button>
    </div>
  )
}
export default App