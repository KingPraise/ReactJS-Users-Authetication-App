// Import the React library to use JSX and React features
import React from "react";
// Import the Card component from the UI folder for consistent styling
import Card from "../UI/Card";
// Import CSS module styles for this component
import classes from "./UsersList.module.css";

// Define the UsersList functional component, which receives props
const UsersList = (props) => {
  // Return the JSX to render the component UI
  return (
    // Render the Card component with a custom CSS class for styling
    <Card className={classes.users}>
      {/* Render a heading for the user list */}
      <h2>User List</h2>
      {/* Render an unordered list to display users */}
      <ul>
        {/* Iterate over the users array passed via props */}
        {props.users.map((user) => (
          // Render a list item for each user, using user.id as a unique key
          <li key={user.id}>
            {/* Display the user's name and age */}
            {user.name} ({user.age} years old)
            {/* Render a button to remove the user; calls onRemoveUser with user.id when clicked */}
            <button onClick={() => props.onRemoveUser(user.id)}>Remove</button>
            {/* Render a button to update the user */}
            <button
              onClick={() => {
                // Prompt the user for a new name, defaulting to the current name
                const newName = prompt("Enter new name", user.name);
                // Prompt the user for a new age, defaulting to the current age
                const newAge = prompt("Enter new age", user.age);
                // If both newName and newAge are provided, call onUpdateUser with new values
                if (newName && newAge) {
                  props.onUpdateUser(user.id, newName, newAge);
                }
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

// Export the UsersList component as the default export of this file
export default UsersList;
