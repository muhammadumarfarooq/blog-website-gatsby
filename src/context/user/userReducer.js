import { HANDLE_LOGIN_USER, HANDLE_SIGN_OUT_USER, } from "../types";

export default (state, action) => {
  switch (action.type) {
    case HANDLE_LOGIN_USER:
      return { ...state, user: action.payload, isUserLoggedIn: true };
    case HANDLE_SIGN_OUT_USER:
      return { ...state, user: {}, isUserLoggedIn: false };
    default:
      return state;
  }
}
