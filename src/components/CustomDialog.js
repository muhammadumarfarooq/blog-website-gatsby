import React from "react";
import Modal from "react-bootstrap/Modal";

const CustomDialog = ({ open, handleClose, className, children }) => {
  
  const cn = className ? `custom-dialog ${className}` : "custom-dialog";
  return (
    <Modal className={cn} show={open} onHide={handleClose}>
      {children}
    </Modal>
  );
};

export default CustomDialog;
