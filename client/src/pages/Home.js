import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8888/posts")
      .then((res) => {
        setListOfPosts(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      {listOfPosts.map((post, index) => {
        return (
          <div className="post" key={index}>
            <div className="title">{post.title}</div>
            <div className="body">{post.postText}</div>
            <div className="footer">{post.username}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
