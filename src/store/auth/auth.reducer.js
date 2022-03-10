//import ADD_TODOS from "./actionTypes";
import { getValue, updateValue } from "../../utils/localStorage";
import { initialState } from "./auth.constant";

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER_LOGIN": {
      const token = "ABCD";
      updateValue("userToken", token);
      return {
        isLogged: true,
        userToken: token
      };
    }
    case "USER_LOGOUT": {
      updateValue("userToken", "");
      return {
        isLogged: false,
        userToken: ""
      };
    }
    default: {
      return state;
    }
  }
};
