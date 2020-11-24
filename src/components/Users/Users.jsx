import React from "react";
import s from "./Users.module.css";
import noUserPhoto from "../../assest/images/User.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
  let pageCount = Math.ceil(props.usersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pagesNumber}>
        {pages.map((p) => {
          return (
            <div
              className={props.currentPage === p && s.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </div>
          );
        })}
      </div>
      {props.users.map((ue) => (
        <div key={ue.id} className={s.users}>
          <div className={s.left}>
            <div className={s.ava}>
              <NavLink to={"profile/" + ue.id}>
                <img
                  src={ue.photos.small != null ? ue.photos.small : noUserPhoto}
                />
              </NavLink>
            </div>
            <div>{ue.name}</div>
            <div className={s.button}>
              {ue.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${ue.id}`,
                        {
                          withCredentials: true,
                          headers: "0b33513f-dce5-466b-9c81-8713d7df6fb4",
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(ue.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${ue.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: "0b33513f-dce5-466b-9c81-8713d7df6fb4",
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0){
                    props.follow(ue.id);
                      }
                    })
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={s.center}>
            <div className={s.status}>
              {ue.status != null ? ue.status : "No status"}
            </div>
          </div>
          <div className={s.right}>
            <div>{"city"}</div>
            <div>{"country"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
