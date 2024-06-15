import PropTypes from "prop-types"; // ES6
import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
 
    return (
        <div className="md:w-1/3 max-h-screen">
            <div>
                <h3 className="text-3xl ml-4">Reading Time : {readingTime} </h3>
            </div>
            <h2 className="text-3xl m-4 text-center  bg-gray-300 py-6 h-auto">Bookmarks Blog:{bookmarks.length}
            {
                bookmarks.map((bookmark,idx)=> <Bookmark  key={idx} bookmark={bookmark}></Bookmark>)
            }
            </h2>
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number,
}
export default Bookmarks;