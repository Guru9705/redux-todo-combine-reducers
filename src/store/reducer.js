import { combineReducers } from "redux";
import { todosReducer } from "./todos/todos.reducer";
import { authReducer } from "./auth/auth.reducer";

export default combineReducers({
  todos: todosReducer,
  auth: authReducer
});
