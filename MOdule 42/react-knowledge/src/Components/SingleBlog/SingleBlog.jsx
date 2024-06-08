import { space } from "postcss/lib/list";
import PropTypes from "prop-types"; // ES6

const SingleBlog = ({ blog }) => {
  console.log(blog)
  const { title, cover_image , author,author_image, reading_time,posted_date,hashtags} = blog;
  return (
    <div className="space-y-4 mb-20">
      <img src={cover_image} alt={`cover_image_image pic of the title ${title}`} />
      <div className="flex justify-between">
        <div className="flex space-x-3">
            <img className="h-10 w-10 rounded-full" src={author_image} alt="" />
            <div>
                <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
            </div>
        </div>

        <div>
            <span>{reading_time} min read</span>
          
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="space-x-2"> 
        {
            hashtags.map((hash,idx)=> <span key={idx}><a href="">{hash}</a></span>)
            //map takes two parameter 1st is element and 2nd is index ;
        }
      </p>
    </div>
  );
};
SingleBlog.propTypes = {
  //must small latter start and this will be propTypes
  blog: PropTypes.object.isRequired, //prop_name : PropTypes.data_type.isRequired
};
export default SingleBlog;
