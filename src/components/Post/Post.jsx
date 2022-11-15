import React from "react";
import "./Post.css";

export const Post = ({ text, id }) => {
  return (
    <div id={id} className="post">
      <img className="post__avatar"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        alt="avatar"
      />
      <p className="post__text">{text}</p>
    </div>
  );
};
