import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function TodoEditInput() {
  const { state } = useLocation();
  const [newVal, setVal] = useState(state.name);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div>TodoEditInput</div>
      <input
        type="text"
        value={newVal}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "EDIT_TODOS",
            payload: {
              id: state.id,
              name: newVal,
              status: state.status
            }
          });
          navigate(`/`);
        }}
      >
        Submit
      </button>
    </div>
  );
}
