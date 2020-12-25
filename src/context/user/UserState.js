import React, { useReducer } from 'react';
import UserReducer from './userReducer';
import UserContext from './userContext';
import { HANDLE_LOGIN_USER, HANDLE_SIGN_OUT_USER } from "../types";

const UserState = ({ children }) => {
  const initialState = {
    isUserLoggedIn: null,
    user: {}
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  
  const handleLoginUser = (user) => {
    dispatch({ type: HANDLE_LOGIN_USER, payload: user });
  };
  
  const handleSignoutUser = () => {
    dispatch({ type: HANDLE_SIGN_OUT_USER });
  };
  
  return (
    <UserContext.Provider value={{ state, handleLoginUser, handleSignoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
