import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

// ErrorModal component for displaying error messages
// Accepts props for title, message, and a function to handle confirmation

const ErrorModal = (props) => {
  return (
    // The ErrorModal component is a modal dialog that displays an error message
    // It uses the Card component for styling and layout, and the Button component for user interaction.
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      {/* The backdrop div is used to create a semi-transparent background that covers the entire screen */}
      {/* Clicking on the backdrop will trigger the onConfirm function, closing the modal */} 
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        {/* The header section displays the title of the error message */}
        {/* The content section displays the actual error message passed as a prop */}
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
        {/* The footer section contains a button that allows the user to acknowledge the error and close the modal */}
        {/* The onClick handler for the button calls the onConfirm function passed as a prop */}
      </Card>
    </div>
  );
};

export default ErrorModal;
