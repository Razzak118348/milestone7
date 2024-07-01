import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blog/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header";

function App() {
  const [bookmarks, setBookmarks]=useState([]);
  const [readingTime, setreadingTime]=useState(0)

  const handleAddBookmark =blog=>{
   const newBookmarks =[...bookmarks,blog];
   setBookmarks(newBookmarks);
   
  }

  const handleMarkAsRead=(time,id ) =>{
    console.log('marking as read ', time )
  setreadingTime(readingTime+time);
  //remove the read blog from 
  console.log(" remove bookmark ",id)

  const remainingBookmarks = bookmarks.filter(bookmark =>bookmark.id !== id   )
  setBookmarks(remainingBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div  className="flex max-w-7xl mx-auto space-x-20">
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
