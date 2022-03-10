//import ADD_TODOS from "./actionTypes";

import { initialState } from "./todos.constant";

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODOS": {
      var obj = {
        ...state,
        data: [...state.data, payload]
      };
      console.log(obj);
      return obj;
    }
    case "EDIT_TODOS": {
      return {
        data: state.data.map((s) => {
          if (s.id === payload.id) {
            s.name = payload.name;
            return s;
          }
          return s;
        })
      };
    }
    case "DELETE_TODOS": {
      return { data: state.data.filter((s) => s.id !== payload.id) };
    }
    case "COMPLETED_TODOS": {
      //console.log("jhlkjh", [state.todos]);
      return {
        completed: payload
      };
    }
    case "CHECKED_TODOS": {
      return {
        data: state.data.map((s) => {
          if (s.id === payload.id) {
            s.status = payload.status;
          }
          return s;
        })
      };
    }

    default: {
      return state;
    }
  }
};
