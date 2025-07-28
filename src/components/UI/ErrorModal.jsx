// Import the React library to use JSX and React features
import React from "react";
// Import the Card component for modal styling and layout
import Card from "./Card";
// Import the Button component for the modal's action button
import Button from "./Button";
// Import CSS module styles specific to the ErrorModal component
import classes from "./ErrorModal.module.css";

// Define the ErrorModal functional component, which receives props
const ErrorModal = (props) => {
  // Return the JSX structure for the modal
  return (
    // Root div that wraps the entire modal and backdrop
    <div>
      {/* Backdrop div creates a semi-transparent overlay behind the modal */}
      {/* When clicked, it triggers the onConfirm handler passed via props */}
      <div className={classes.backdrop} onClick={props.onConfirm} />
      {/* Card component provides the modal's styled container */}
      <Card className={classes.modal}>
        {/* Header section of the modal */}
        <header className={classes.header}>
          {/* Display the error title passed via props */}
          <h2>{props.title}</h2>
        </header>
        {/* Content section of the modal */}
        <div className={classes.content}>
          {/* Display the error message passed via props */}
          <p>{props.message}</p>
        </div>
        {/* Footer section containing the action button */}
        <footer className={classes.actions}>
          {/* Button to acknowledge the error and close the modal */}
          {/* Clicking the button triggers the onConfirm handler */}
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

// Export the ErrorModal component as the default export of this file
export default ErrorModal;
