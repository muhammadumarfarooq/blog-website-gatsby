import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <Navbar/>
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
