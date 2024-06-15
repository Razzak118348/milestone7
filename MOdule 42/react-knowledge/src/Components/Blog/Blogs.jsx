import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import PropTypes from "prop-types"; // ES6


const Blogs = ({handleAddBookmark,handleMarkAsRead}) => {
//prop must pass in 2nd bracket .. 
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('block.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-2xl font-bold"> Blogs :{blogs.length}</h2>
            {
                blogs.map(blog =><SingleBlog
                     key={blog.id} 
                     blog={blog}
                     handleAddBookmark={handleAddBookmark}
                     handleMarkAsRead={handleMarkAsRead}
                     > 
                     </SingleBlog>)
            }
        </div>
    );
};

Blogs.propTypes= {
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired,
}
export default Blogs;