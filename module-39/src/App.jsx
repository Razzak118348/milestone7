import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
// import Users from './users';
// import Team from './Plear';
// import ForState from './EventAdd';
// import Friends from './friends';
// import Friend from './Friend';

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
      {/* <Users></Users> */}
      {/* <Friends></Friends>
     
    <Team></Team>
   <ForState></ForState> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{alert('2nd Click')}}>2nd Click</button>
      <button onClick={()=>addTwo(3)}>3rd /click</button>
     
    </>
  )
}

export default App
