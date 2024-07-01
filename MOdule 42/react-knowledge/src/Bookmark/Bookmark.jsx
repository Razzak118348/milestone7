import PropTypes from "prop-types"; // ES6

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    
    const {title}=bookmark;
    return (
        <div>
            <h3 className="text-2xl bg-slate-200 p-4 m-4 rounded-md">{title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark:PropTypes.object,
}

export default Bookmark;