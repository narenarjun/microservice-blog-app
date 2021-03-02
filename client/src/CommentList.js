import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComment = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchComment();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comments.content}</li>;
  });

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
