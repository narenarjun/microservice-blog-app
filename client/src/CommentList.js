import React from "react";

const CommentList = ({ comments }) => {
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
