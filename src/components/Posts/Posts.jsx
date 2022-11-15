import React from "react";
import { Post } from "../Post/Post";
import "./Posts.css";

export const Posts = () => {
  const postText = [
    {
      id: "1",
      title: "Post 1",
    },
    {
      id: "2",
      title: "Post 2",
    },
    {
      id: "3",
      title: "Post 3",
    },
    {
      id: "4",
      title: "Post 4",
    },
  ];
  return (
    <div className="posts">
      {postText.map(({ title, id }) => <Post text={title} key={id} id={id}/>)}
    </div>
  );
};
