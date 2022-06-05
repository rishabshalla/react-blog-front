import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { ArrayofBlogs } from './ArrayOfBlog/ArrayOfBlog';
import Advertisement from "./Home-Section/Advertisement/Advertisement";
import TopPost from "./TopPost";
import axios from "axios";

const AllCategory = () => {
  // const [data] = useContext(ArrayofBlogs)

  const { cat } = useParams();

  const [load, setLoad] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://blog-backend-rishab.herokuapp.com/api/v1/TheSiren/${cat}`)
      .then((data) => setBlogs(data.data));
  }, [cat]);

  return (
    <div className="blogBody">
      <div>
        <p className="mainCategory">{cat}</p>
        <hr className="mainCategoryHr" />

        {blogs
          .filter(
            (value) =>
              (load ? value.ID <= "6" : value.ID <= "8") &&
              value.Category === cat
          )
          .map((val, index) => (
            <div>
              <Link to={`/article/${val.Category}/${val.ID}`}>
                <div key={index} className="blogContainer">
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
            {load ? "Load More" : "View Less"}
          </button>
        </div>
      </div>

      <div>
        <TopPost blogs={blogs} />
        <Advertisement />
      </div>
    </div>
  );
};

export default AllCategory;
