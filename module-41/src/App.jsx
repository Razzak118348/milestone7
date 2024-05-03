
import { useState } from 'react'
import './App.css'
import Watch from './Watch/Watch'
import { useEffect } from 'react';

function App() {

  // const watches = [
  //   { id: 1, name: "Rolex Submariner", price: 8950 },
  //   { id: 2, name: "Omega Speedmaster", price: 5300 },
  //   { id: 3, name: "TAG Heuer Carrera", price: 4200 },
  //   { id: 4, name: "Patek Philippe Nautilus", price: 34500 },
  //   { id: 5, name: "Seiko Prospex", price: 700 }
  // ];
  
  const [watches,setWatches]=useState([]);
  useEffect(()=>{
    fetch('watches.json')//public folder er watches.json file ja age
    .then(res=>res.json())
    .then(data=>setWatches(data))

  },[])


  return (
    <>
     
      <h1>Vite + React</h1>
    {(watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>))}
    </>
  )
}

export default App
