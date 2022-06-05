import React, { useEffect, useState } from "react";
// import { useContext } from 'react';
import { useParams } from "react-router-dom";
import { BsHandThumbsUp } from "react-icons/bs";
import axios from "axios";
// import { ArrayofBlogs } from './ArrayOfBlog/ArrayOfBlog';
import MoreFromSiren from "./MoreFromSiren";

const Article = () => {
  // const [data] = useContext(ArrayofBlogs)
  const [blogs, setBlogs] = useState([]);
  const { Id } = useParams();
  const { cat } = useParams();

  useEffect(() => {
    axios
      .get(`https://blog-backend-rishab.herokuapp.com/api/v1/TheSiren/${cat}`)
      .then((data) => setBlogs(data.data));
  }, [cat]);

  return (
    <div>
      {blogs
        .filter((value) => value.ID === Id && value.Category === cat)
        .map((val, index) => (
          <div key={index} className="articleContainer">
            <p className="articleTitle">{val.Title}</p>
            <div className="articleProfileBox">
              {/* <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='' className='articleProfileImg' /> */}
              {/* <div>
                            <p><b>{val.Author}</b></p>
                            <p>{val.Date}</p>
                        </div> */}
            </div>
            <img src={val.Image} alt="" className="articleImg" />
            <p>
              {val.Body}
              {val.Body}
            </p>
            <p>
              <BsHandThumbsUp /> <b>8.4k Like</b>
            </p>
            <hr />

            <div className="articleProfileBox">
              <img
                src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg"
                alt=""
                className="articleProfileImg"
              />
              <div>
                <p>Written By</p>
                <p>
                  <b>{val.Author}</b>
                </p>
                <p>{val.Date}</p>
              </div>
            </div>
            <hr />
          </div>
        ))}

      <MoreFromSiren blogs={blogs} />
    </div>
  );
};

export default Article;
