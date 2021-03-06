import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.activeLink}>
        <img src={props.ava} alt="" /> {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
