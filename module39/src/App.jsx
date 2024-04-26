import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Plears';
import Users from './Users';
import Friends from './Friends';
 
function App() {


    function handleClick(){
      alert('button clicked');
    }
  const addTwo=(num)=>{
    alert(num+2);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team> 
    
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{alert('2nd Click')}}>2nd Click</button>
      <button onClick={()=>addTwo(3)}>3rd /click</button>

    </>
  )
}

export default App
