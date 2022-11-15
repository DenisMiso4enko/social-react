import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";

const Message = () => {
  return <div className="dialogs__messages-item">Message</div>;
};
const DialogItmem = ({ id, name }) => {
  const path = `/dialogs/${id}`;
  return (
    <div className="dialog__user">
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};
export const Dialogs = () => {
  const users = [
    {
      id: 1,
      name: "Димыч",
    },
    {
      id: 2,
      name: "Денис",
    },
    {
      id: 3,
      name: "Аня",
    },
    {
      id: 4,
      name: "Викто",
    },
    {
      id: 5,
      name: "Саша",
    },
    {
      id: 6,
      name: "Антон",
    },
  ];

  return (
    <div className="dialogs">
      <div className="dialogs__users">
        {users.map(({ id, name }) => (
          <DialogItmem key={id} id={id} name={name} />
        ))}
      </div>
      <div className="dialogs__messages">
        <Message />
      </div>
    </div>
  );
};
