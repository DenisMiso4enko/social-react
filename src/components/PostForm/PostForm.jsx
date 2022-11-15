import React from "react";
import "./PostForm.css";

export const PostForm = () => {
  return (
    <div className="post-form">
      <h2 className="post-form__title">My post</h2>
      <div className="post-form__wrapper">
        <form className="form__create-post">
          <textarea name=""></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
