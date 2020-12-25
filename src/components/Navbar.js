import React, { useState } from "react";
import firebase from "gatsby-plugin-firebase";

import CustomDialog from "./CustomDialog";
import UserForm from "./UserForm";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [issigninForm, setIsSigninForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSignupDialogOpen = () => {
    setOpen(true);
    setIsSigninForm(false);
  };
  
  const handleSigninDialogOpen = () => {
    setOpen(true);
    setIsSigninForm(true);
  };
  
  const handleCloseDialog = () => {
    setOpen(false);
    setErrorMessage(null);
  };
  
  const handleSubmit = async (values) => {
    const { email, password } = values;
    if ( issigninForm ) {
      try {
        const resp = await firebase.auth().signInWithEmailAndPassword(email, password);
        return;
        
      } catch (e) {
        setErrorMessage(e.message);
      }
    }
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      setErrorMessage(e.message);
    }
    
  };
  
  return (
    <nav className="navbar">
      <CustomDialog open={open} handleClose={handleCloseDialog}>
        <UserForm
          issigninForm={issigninForm}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
        />
      </CustomDialog>
      <h1>Blog</h1>
      
      <div className="nav-buttons-wrapper">
        <button className="nav-action-btns" onClick={handleSigninDialogOpen}>
          Sign In
        </button>
        <button className="nav-action-btns" onClick={handleSignupDialogOpen}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
