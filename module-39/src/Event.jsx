import { useState } from "react"
// thsi is a hoke of react 

export default function Event(){    
   
    const [count,setCount]=useState(0)
  
   const handleAdd=()=>{
    const newCount =count+1;
    setCount(newCount)
   }
   const handleReduce =()=>{

    const newCount= count - 1;
    setCount(newCount);
 }
   
    return(
        <div style={{border:'2px solid yellow'}}>
            <h2>Counter :{count}</h2 >
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}