import React from "react";
import "./User.css";

export const User = () => {
  return (
    <div className="user">
      <div className="user__avatar">
        <img
          className="user__avatar-img"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          alt="user"
        />
      </div>
      <div className="user__desc">
        <h3 className="user__name">Dmitry K.</h3>
        <p>Date of birth: 2 jun</p>
        <p>City: Minsk</p>
        <p>Education: BGU</p>
        <p>Web site: bambam.com</p>
      </div>
    </div>
  );
};
