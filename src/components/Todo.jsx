import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Todo({ todo }) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const editChange = (todo) => {
    navigate(`/${todo.id}/edit`, { state: todo });
  };

  return (
    <div>
      <Link to={`/${todo.id}`}>{todo.name}</Link>
      <button
        onClick={() => {
          dispatch({
            type: "DELETE_TODOS",
            payload: todo
          });
        }}
      >
        remove
      </button>
      <input
        type="checkbox"
        onChange={(e) => {
          dispatch({
            type: "CHECKED_TODOS",
            payload: {
              id: todo.id,
              name: todo.name,
              status: e.target.checked
            }
          });
        }}
      />
      <button
        onClick={() => {
          editChange(todo);
        }}
      >
        Edit
      </button>
    </div>
  );
}
