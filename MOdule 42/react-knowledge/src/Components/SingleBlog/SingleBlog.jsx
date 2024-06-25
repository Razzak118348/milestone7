import PropTypes from "prop-types"; // ES6

import { FaBookmark } from "react-icons/fa";

const SingleBlog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  // console.log(blog)
  // console.log(handleAddBookmark)
  const {
    id,
    title,
    cover_image,
    author,
    author_image,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="space-y-4 mb-20">
      <img
        src={cover_image}
        alt={`cover_image_image pic of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <img className="h-10 w-10 rounded-full" src={author_image} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div className="flex">
          <span>{reading_time} min read </span>
          <button
            onClick={() => {
              handleAddBookmark(blog);
            }}
            className="mb-8 ml-2 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
          {/* 2nd bracket for the function ..nije nije jn call na hoy tai function creat kore call kora hoise .. jokhon click korbe tokhon e call hobe  */}
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="space-x-2">
        {
          hashtags.map((hash, idx) => (
            <span key={idx}>
              <a href="">{hash}</a>
            </span>
          ))
          //map takes two parameter 1st is element and 2nd is index ;
        }
      </p>
      <button
        onClick={() => {
          handleMarkAsRead(id, reading_time);
        }}
        className="text-purple-600 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};
SingleBlog.propTypes = {
  //must import proptypes in first line 
  //must small latter start and this will be propTypes
  blog: PropTypes.object.isRequired, //prop_name : PropTypes.data_type.isRequired
  handleAddBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default SingleBlog;
