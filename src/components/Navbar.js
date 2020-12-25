import React, { useContext, useEffect, useState } from "react";
import firebase from "gatsby-plugin-firebase";
import CustomDialog from "./CustomDialog";
import UserForm from "./UserForm";
import UserContext from "../context/user/userContext";
import { toast } from 'react-toastify';

const Navbar = () => {
  const { state, handleLoginUser, handleSignoutUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [issigninForm, setIsSigninForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if ( user ) {
        //This function is gets called whenever a user is logged in.
        handleLoginUser(user);
      } else {
        //this function gets called whenever user sign out
        handleSignoutUser();
      }
    });
  }, []);
  
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
        await firebase.auth().signInWithEmailAndPassword(email, password);
        toast.success('User signed in successfully.');
        handleCloseDialog();
      } catch (e) {
        setErrorMessage(e.message);
      }
    } else {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        toast.success('User registered successfully.');
        handleCloseDialog();
      } catch (e) {
        setErrorMessage(e.message);
      }
    }
    
  };
  
  const signoutUser = async () => {
    try {
      await firebase.auth().signOut();
      toast.error('User signed out successfully');
    } catch (e) {
      console.log(e);
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
        {state.isUserLoggedIn ? (
          <button className="nav-action-btns" onClick={signoutUser}>
            Sign out
          </button>
        ) : (
          <>
            <button className="nav-action-btns" onClick={handleSigninDialogOpen}>
              Sign In
            </button>
            <button className="nav-action-btns" onClick={handleSignupDialogOpen}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
