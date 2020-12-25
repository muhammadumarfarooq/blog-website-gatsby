import React, { useContext, useEffect } from 'react';
import UserContext from '../context/user/userContext';
import firebase from "gatsby-plugin-firebase";

import PropTypes from 'prop-types';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ className, children }) => {
  const { state, handleLoginUser, handleSignOutUser } = useContext(UserContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if ( user ) {
        handleLoginUser(user);
      } else {
        handleSignOutUser();
      }
    });
  }, []);
  return (
    <div className={className}>
      <Navbar state={state}/>
      {children}
      <Footer/>
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
