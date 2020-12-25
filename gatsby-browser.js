import React from 'react';
import "firebase/auth";
import './src/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import UserState from './src/context/user/UserState';

export const wrapRootElement = ({ element }) => {
  return (
    <UserState>
      {element}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </UserState>
  );
};
