import React, { useState } from "react";
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
  
  const handleSubmit = (values) => {
    if ( issigninForm ) {
      console.log("LoginForm", values);
      return;
    }
    
    console.log("Sign up form...");
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
