import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Home() {
  const isLogged = useSelector((data) => data.auth.isLogged);

  const dispatch = useDispatch();

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      {isLogged ? (
        <button
          onClick={() => {
            dispatch({
              type: "USER_LOGOUT",
              payload: {}
            });
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: "USER_LOGIN",
              payload: {}
            });
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
