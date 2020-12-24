import React, { useState } from "react";
import CustomDialog from "./CustomDialog";
import UserForm from "./UserForm";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <CustomDialog open={open} handleClose={() => setOpen(false)}>
        <UserForm/>
      </CustomDialog>
      <h1>Blog</h1>
      <button onClick={() => setOpen(true)}>
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
