import React, { useEffect, useState } from "react";
// import { useContext } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
// import { ArrayofBlogs } from './ArrayOfBlog/ArrayOfBlog';

const MoreFromSiren = () => {
  // const [data] = useContext(ArrayofBlogs)

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://blog-backend-rishab.herokuapp.com/api/v1/TheSiren`)
      .then((data) => setBlogs(data.data));
  }, []);

  return (
    <div className="MoreFromSirenContainer">
      <p className="mainCategory">More From The Siren</p>
      <hr />

      <div className="TheLatestBox">
        {blogs
          .filter(
            (value) =>
              value.ID === "2" &&
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
              <p className="body">Related reads</p>
              <img src={val.Image} className="TheLatestImg" alt="" />
              <p className="title">{val.Title}</p>
              <p className="body">
                <strong>{val.Category}</strong>/ {val.Date}
              </p>

              <div className="articleProfileBox">
                <img
                  src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg"
                  className="articleProfileImg"
                  alt=""
                />
                <div>
                  <p>
                    <b>{val.Author}</b>
                  </p>
                  <p>{val.Date}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MoreFromSiren;
