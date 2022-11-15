import React from "react";
import { Banner } from "../Banner/Banner";
import { PostForm } from "../PostForm/PostForm";
import { Posts } from "../Posts/Posts";
import { User } from "../User/User";
import "./Profile.css";

export const Profile = () => {
  return (
    <main className="content">
      <Banner />
      <div className="main__user">
        <User />
      </div>
      <div className="main__posts">
        <PostForm />
        <Posts />
      </div>
    </main>
  );
};
