import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function Total() {
  const completed = useSelector((state) => state.completed);
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({
  //     type: "COMPLETED_TODOS",
  //     payload: [...todos]
  //   });
  // }, [dispatch]);

  return (
    <div>
      <h2>Total number of completed tasks</h2>
      {todos !== undefined
        ? todos.map((c) => {
            if (c.status == true) {
              return <div>{c.name}</div>;
            }
          })
        : ""}
    </div>
  );
}
