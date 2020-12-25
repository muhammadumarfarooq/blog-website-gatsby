import React, { useState } from "react";
import firebase from "gatsby-plugin-firebase";

import CustomDialog from "./CustomDialog";
import UserForm from "./UserForm";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [issigninForm, setIsSigninForm] = useState(false);
  
  const handleSignupDialogOpen = () => {
    setOpen(true);
    setIsSigninForm(false);
  };
  
  const handleSigninDialogOpen = () => {
    setOpen(true);
    setIsSigninForm(true);
  };
  
  const handleSubmit = async (values) => {
    const { email, password } = values;
    if ( issigninForm ) {
      console.log("LoginForm", values);
      return;
    }
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
    
  };
  
  return (
    <nav className="navbar">
      <CustomDialog open={open} handleClose={() => setOpen(false)}>
        <UserForm
          issigninForm={issigninForm}
          handleSubmit={handleSubmit}
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
