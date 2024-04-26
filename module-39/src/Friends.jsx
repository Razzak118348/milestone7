import { useEffect, useState } from "react"
import './Friends.css'

export default  function Friends(){
   
   const [friends,setFriends]=useState([]);
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data))
   },[])
    return(
        <div className="box">
            <h3>Friends:{friends.length} </h3>
            {
                friends.map(friend=> <Friends friend={friend}></Friends>)
            }
        </div>
    )
}

// 
/**
 * 1. state to hold data 
 * 2.use effect with dependency array 
 * 3.use fetch to load data
 */