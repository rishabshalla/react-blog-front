import React from "react";
// import { ArrayofBlogs } from "../../ArrayOfBlog/ArrayOfBlog";
import { Link } from "react-router-dom";

const Intro = ({ blogs }) => {
  // const [data] =useContext(ArrayofBlogs)

  return (
    <div className="topHomeContainer">
      <div className="topHomeContainer-1">
        {blogs
          .filter((value) => value.ID === "4" && value.Category === "Food")
          .map((val, index) => (
            <Link to={`/article/${val.Category}/${val.ID}`} key={index}>
              <img src={val.Image} className="topHomeImg1" alt="" />
              <div className="topHomeContent1">
                <p className="topHomeTitle1">{val.Title}</p>
                <p className="topHomeCat1">
                  {val.Category} / {val.Date}
                </p>
              </div>
            </Link>
          ))}
      </div>

      <div className="topHomeContainer-2">
        {blogs
          .filter(
            (value) =>
              value.ID === "3" &&
              (value.Category === "Technology" || value.Category === "Fitness")
          )
          .map((val, index) => (
            <div key={index} className="box">
              <Link to={`/article/${val.Category}/${val.ID}`}>
                <img src={val.Image} className="topHomeImg2" alt="" />
                <div className="topHomeContent2">
                  <p className="topHomeTitle2">{val.Title.substring(0, 59)}.</p>
                  {/* <p className="topHomeCat2">
                    {val.Category} / {val.Date}
                  </p> */}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Intro;
