import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Post = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8888/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/comments/${id}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const addComment = () => {
    axios
      .post(`http://localhost:8888/comments/${id}`, {
        CommentBody: newComment,
        PostId: id,
      })
      .then((res) => setComments([...comments, { CommentBody: newComment }]))
      .catch((err) => console.log(err));
    setNewComment("");
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div id="individual" className="post">
          <div className="title">{post.title}</div>
          <div className="body">{post.postText}</div>
          <div className="footer">{post.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
          <button onClick={addComment}>Submit Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, index) => {
            return (
              <div className="comment" key={index}>
                {comment.CommentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
