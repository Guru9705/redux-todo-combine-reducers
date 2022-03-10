import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
export default function TodoInput() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODOS",
            payload: {
              id: v4(),
              name: value,
              status: false
            }
          });
          setValue("");
        }}
      >
        ADD
      </button>
    </div>
  );
}
