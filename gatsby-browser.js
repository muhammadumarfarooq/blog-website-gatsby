import React from 'react';
import "firebase/auth";
import './src/styles/global.scss';
import UserState from './src/context/user/UserState';

export const wrapRootElement = ({ element }) => {
  return (
    <UserState>
      {element}
    </UserState>
  );
};
