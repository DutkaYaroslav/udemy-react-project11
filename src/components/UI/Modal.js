import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}

      {/* <BackDrop /> */}
      {/* <ModalOverlay /> */}
    </>
  );
};

export default Modal;
