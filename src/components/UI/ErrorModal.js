import Card from "./Card";
import React, { Fragment } from "react";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.errorDismiss}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.errorDismiss}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop errorDismiss={props.errorDismiss} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          errorDismiss={props.errorDismiss}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};
export default ErrorModal;
