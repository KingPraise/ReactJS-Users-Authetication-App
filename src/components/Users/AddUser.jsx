// Import the React library to use JSX and React features
import React from "react";
// Import the Card component for UI layout
import Card from "../UI/Card";
// Import CSS module for styling this component
import classes from "./AddUser.module.css";
// Import the Button component for the submit button
import Button from "../UI/Button";
// Import useState hook for managing component state
import { useState } from "react";
// Import ErrorModal component to display error messages
import ErrorModal from "../UI/ErrorModal";

// Define the AddUser functional component, receiving props from parent
const AddUser = (props) => {
  // State for storing the entered username input
  const [enteredUsername, setEnteredUsername] = useState("");
  // State for storing the entered age input
  const [enteredAge, setEnteredAge] = useState("");
  // State for storing error information (if any)
  const [error, setError] = useState();

  // Handler for form submission
  const addUserHandler = (event) => {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();
    // Validate that both username and age fields are not empty
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // Set error state if validation fails
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non empty values)",
      });
      // Stop further execution
      return;
    }
    // Validate that age is a positive number
    if (+enteredAge < 1) {
      // Set error state if age is invalid
      setError({
        title: "Invalid Age",
        message: "Please enter a valid Age (> 0)",
      });
      // Stop further execution
      return;
    }
    // If input is valid, call the onAddUser function passed via props
    props.onAddUser(enteredUsername, enteredAge);
    // Reset the age input field to empty string
    setEnteredAge("");
    // Reset the username input field to empty string
    setEnteredUsername("");
  };

  // Handler for username input changes
  const usernameChangeHandler = (event) => {
    // Update the enteredUsername state with the new value
    setEnteredUsername(event.target.value);
  };

  // Handler for age input changes
  const ageChangeHandler = (event) => {
    // Update the enteredAge state with the new value
    setEnteredAge(event.target.value);
  };

  // Handler to clear the error state when error modal is acknowledged
  const errorHandler = () => {
    // Set error state to null to close the error modal
    setError(null);
  };

  // Render the component UI
  return (
    <div>
      {/* If there is an error, display the ErrorModal component */}
      {error && (
        <ErrorModal
          onConfirm={errorHandler} // Handler for closing the modal
          title={error.title}       // Error title
          message={error.message}   // Error message
        />
      )}
      {/* Render the Card component for form layout */}
      <Card className={classes.input}>
        {/* Form for adding a user, calls addUserHandler on submit */}
        <form onSubmit={addUserHandler}>
          {/* Username input field with label */}
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"                  // Input type is text
              id="username"                // Input id for label association
              value={enteredUsername}      // Controlled input value
              onChange={usernameChangeHandler} // Handler for input changes
            />
          </div>
          {/* Age input field with label */}
          <div className="form-control">
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"                // Input type is number
              id="age"                     // Input id for label association
              value={enteredAge}           // Controlled input value
              onChange={ageChangeHandler}  // Handler for input changes
            />
          </div>
          {/* Button to submit the form */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

// Export the AddUser component as the default export
export default AddUser;
