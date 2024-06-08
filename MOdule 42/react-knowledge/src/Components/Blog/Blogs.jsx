import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";


const Blogs = () => {

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
                     blog={blog}> 
                     </SingleBlog>)
            }
        </div>
    );
};

export default Blogs;