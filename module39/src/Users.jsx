import { useEffect, useState } from "react";

export default function Users(){
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])//2 perameter ..1st call back function and 2nd is empty array

    return (
        <div>
            <h2>Users :{users.length}</h2>
        </div>
    )
}