import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8888/posts")
      .then((res) => {
        console.log(res.data);
        setListOfPosts(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      {listOfPosts.map((post, index) => {
        return (
          <div
            className="post"
            key={index}
            onClick={() => {
              history.push(`/post/${post.id}`);
            }}
          >
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
