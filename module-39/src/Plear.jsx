import { useState } from "react"

export default function Team(){
    const [plear,setPlear]=useState(11)
    const AddPlear=()=>{
        const NewCount= plear+1;
        setPlear(NewCount);
    }
    const Reduce=()=>{
        const newPlear=plear - 1;
        setPlear(newPlear);
    }
const teamStyle={
    border:'2px solid purple',
    margin:'13px',
    padding:'10px',
    borderRadius:'10px',

}

    return (
        <div style={teamStyle}>
            <h2>Plear :{plear} </h2>
            <button onClick={AddPlear}>Add</button>
            <button onClick={Reduce}>Reduce</button>
        </div>
    )
}