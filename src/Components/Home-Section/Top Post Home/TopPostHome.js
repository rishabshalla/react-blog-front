import React from "react";
import { Link } from "react-router-dom";
// import { useContext } from 'react';
// import { ArrayofBlogs } from '../../ArrayOfBlog/ArrayOfBlog';

const TopPostHome = ({ blogs }) => {
  // const [data] = useContext(ArrayofBlogs)

  return (
    <div>
      <p className="mainCategory">Top Post</p>
      <hr className="mainCategoryHr" />
      <div>
        {blogs
          .filter((value) => value.ID === "1" && value.Category === "Bollywood")
          .map((val, index) => (
            <div key={index}>
              <Link to={`/article/${val.Category}/${val.ID}`}>
                <div className="LatestContainer">
                  <img src={val.Image} className="LatestImg" alt="" />
                  <div className="flexBox">
                    <div>
                      <p className="blogTitle">{val.Title}</p>
                      {/* <p className="blogCategory">{val.Category}</p> */}
                    </div>
                    <p className="LatestId">{val.ID}</p>
                  </div>
                </div>
                <hr className="blogLine" />
              </Link>
            </div>
          ))}

        {blogs
          .filter(
            (value) =>
              (value.ID === "2" && value.Category === "Technology") ||
              (value.ID === "3" && value.Category === "Hollywood") ||
              (value.ID === "4" && value.Category === "Food")
          )
          .map((val, index) => (
            <div key={index}>
              <Link to={`/article/${val.Category}/${val.ID}`}>
                <div className="SubContainer">
                  <img src={val.Image} className="SubImg" alt="" />
                  <div>
                    <p className="blogTitle">{val.Title}</p>
                    <p className="blogCategory">{val.Category}</p>
                  </div>
                  <p className="LatestId">{val.ID}</p>
                </div>
                <hr className="blogLine" />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopPostHome;
