import { getValue } from "../../utils/localStorage";

export const initialState = {
  isLogged: getValue("userToken") ? true : false,
  userToken: getValue("userToken")
};
