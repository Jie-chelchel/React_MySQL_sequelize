import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
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
    <div className="App">
      {listOfPosts.map((post, index) => {
        return (
          <div className="post">
            <div className="title">{post.title}</div>
            <div className="body">{post.postText}</div>
            <div className="footer">{post.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
