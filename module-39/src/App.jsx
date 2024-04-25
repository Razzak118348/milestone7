import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Event from './Event';
import Team from './Plear';

function App() {
  function handleClick(){
    alert('button clicked');
  }
const addTwo=(num)=>{
  alert(num+2);
}
  return (
    <>
   
      <h1>React core concept 2</h1>
   <Team></Team>
      <Event></Event>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{alert('2nd Click')}}>2nd Click</button>
      <button onClick={()=>addTwo(3)}>3rd /click</button>
     
    </>
  )
}

export default App
