import React from "react";
// import { ArrayofBlogs } from "../../ArrayOfBlog/ArrayOfBlog";
import { Link } from "react-router-dom";

const TheLatest = ({ blogs }) => {
  // const [data] = useContext(ArrayofBlogs);

  return (
    <div className="TheLatestContainer">
      <p className="mainCategory">The Latest</p>
      <hr className="mainCategoryHr" />

      <div className="TheLatestBox">
        {blogs
          .filter(
            (value) =>
              value.ID === "6" &&
              (value.Category === "Bollywood" ||
                value.Category === "Fitness" ||
                value.Category === "Hollywood")
          )
          .map((val, index) => (
            <Link
              key={index}
              to={`/article/${val.Category}/${val.ID}`}
              className="TheLatestContent"
            >
              <img src={val.Image} className="TheLatestImg" alt="" />
              <p className="title">{val.Title}</p>
              <p className="body">{val.Body.substring(0, 150)}...</p>
              {/* <p className="body">
                <strong>{val.Category}</strong>/ {val.Date}
              </p> */}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TheLatest;
