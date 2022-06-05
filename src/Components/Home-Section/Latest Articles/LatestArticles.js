import React, { useState } from "react";
// import { ArrayofBlogs } from "../../ArrayOfBlog/ArrayOfBlog";
import { Link } from "react-router-dom";
import TopPostHome from "../Top Post Home/TopPostHome";
import Advertisement from "../Advertisement/Advertisement";

const LatestArticles = ({ blogs }) => {
  // const [data] = useContext(ArrayofBlogs)
  const [load, setLoad] = useState(true);

  return (
    <>
      <p className="mainCategory">Latest Articles</p>
      <hr className="mainCategoryHr" />
      <div className="blogBody">
        <div>
          {blogs
            .filter(
              (value) =>
                (load ? value.ID <= "4" : value.ID <= "6") &&
                value.Category === "Bollywood"
            )
            .map((val, index) => (
              <div key={index}>
                <Link to={`/article/${val.Category}/${val.ID}`}>
                  <div className="blogContainer">
                    <img src={val.Image} className="blogImg" alt="" />
                    <div className="blogContent">
                      <p className="blogTitle">{val.Title}</p>
                      <p className="blogDetail">
                        {val.Body.substring(0, 150)}...
                      </p>
                      {/* <p className="blogCategory">{val.Category}</p> */}
                    </div>
                  </div>
                </Link>

                <hr className="blogLine" />
              </div>
            ))}

          <div className="btn">
            <button onClick={() => setLoad(!load)} className="btn">
              {load ? "View More" : "View Less"}
            </button>
          </div>
        </div>

        <div>
          <Advertisement />
          <TopPostHome blogs={blogs} />
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
