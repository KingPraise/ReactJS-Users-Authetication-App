import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
// UsersList component for displaying a list of users
// Accepts props for users and functions to handle user removal and updates

const UsersList = (props) => {
  // The UsersList component is responsible for rendering a list of users
  // It receives an array of users and functions to remove or update a user as props.
  return (
    <Card className={classes.users}>
      <h2>User List</h2>
      {/* The h2 element displays the title of the user list */}
      {/* The users prop is expected to be an array of user objects, each with an id, name, and age */}
      {/* The onRemoveUser and onUpdateUser props are functions to handle user removal and updates */}
      <ul>
        {/* The ul element contains a list of users */}
        {props.users.map((user) => (
          // The map function iterates over the users array and renders each user as a list item
          // Each user is displayed with their name and age, along with buttons to remove or update the user
          <li key={user.id}>
            {/* The key prop is used to uniquely identify each list item for React's reconciliation process */}
            {user.name} ({user.age} years old)
            {/* The user's name and age are displayed in the list item */}
            <button onClick={() => props.onRemoveUser(user.id)}>Remove</button>
            {/* The Remove button calls the onRemoveUser function with the user's id when clicked */}
            <button
              onClick={() => {
                const newName = prompt("Enter new name", user.name);
                const newAge = prompt("Enter new age", user.age);
                if (newName && newAge) {
                  props.onUpdateUser(user.id, newName, newAge);
                }
              }}
            >
              Update
            </button>
            {/* The Update button prompts the user for a new name and age, then calls the onUpdateUser function with the user's id and new values */}
            {/* If the user provides valid input, the user's information is updated */}
          </li>
        ))}
      </ul>
    </Card>
  // The component returns a Card component that wraps the user list
  // The Card component provides consistent styling and layout for the user list
  );
};

export default UsersList;
// Note: The `onRemoveUser` and `onUpdateUser` props should be passed from the parent component (e.g., App.js) to handle user removal and updates.
// This component displays a list of users with options to remove or update each user.
