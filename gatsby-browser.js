import React from 'react';
import "firebase/auth";
import './src/styles/global.scss';
import { Provider as UserProvider } from './src/context/UserContext';

export const wrapRootElement = ({ element }) => {
  return (
    <UserProvider>
      {element}
    </UserProvider>
  );
};
