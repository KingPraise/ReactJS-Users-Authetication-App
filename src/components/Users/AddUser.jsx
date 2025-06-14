import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

// AddUser component for adding new users
// Accepts props for adding a user and handles input validation

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // State variables to manage user input and error handling
  // enteredUsername: stores the username input
  // enteredAge: stores the age input
  // error: stores any error messages to be displayed
  // addUserHandler: function to handle form submission and validate input
  // usernameChangeHandler: function to update the username state
  // ageChangeHandler: function to update the age state
  // errorHandler: function to clear the error state when the user acknowledges the error
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid Age (> 0)",
      });
      return;
    }
    // ✅ Valid input, proceed to add user
    // The enteredUsername and enteredAge are valid, so we can proceed to add the user

    // ✅ Send data to App
    props.onAddUser(enteredUsername, enteredAge);

    // Reset input fields after successful submission
    setEnteredAge("");
    setEnteredUsername("");
  };

  // Handlers for input changes and error handling
  // These functions update the state variables based on user input
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // Function to handle error acknowledgment
  const errorHandler = () => {
    setError(null);
  };

  // The errorHandler function is called when the user acknowledges the error
  // It sets the error state to null, effectively closing the error modal
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      {/* Conditional rendering of ErrorModal if an error exists */}
      {/* The ErrorModal component is displayed when there is an error, allowing the user to acknowledge it */} 
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
          </div>
          {/* Input field for username with label and change handler */}
          {/* The input field is controlled by the enteredUsername state, and updates on change */} 
          <div className="form-control">
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
          {/* Input field for age with label and change handler */}
          {/* The input field is controlled by the enteredAge state, and updates on change */}  
          <Button type="submit">Add User</Button>
        </form>
        {/* Submit button to add user */}
        {/* The button triggers the addUserHandler function when clicked, submitting the form */} 
      </Card>
    </div>
  );
};

export default AddUser;
