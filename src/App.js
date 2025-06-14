import AddUser from "./components/Users/AddUser";
import React, { useState } from "react";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  // Function to add a new user to the users list. Parameters: uName - The name of the user to be added.  uAge - The age of the user to be added.
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        // The spread operator is used to include all previous users in the new list
        // A new user object is created with the provided name and age, along with a unique ID
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  // Function to remove a user from the users list by user ID. Parameters: userId - The ID of the user to be removed. It filters the users list to exclude the user with the specified ID.

  const removeUserHandler = (userId) => {
    setUsersList((prevUsersList) => {
      return prevUsersList.filter((user) => user.id !== userId); // The filter method creates a new array that excludes the user with the specified ID. This effectively removes the user from the users list. The user object is identified by its unique ID, ensuring that only the correct user is removed
    });
  };
  // Function to update a user's information in the users list. Parameters: userId - The ID of the user to be updated. updatedName - The new name for the user. updatedAge - The new age for the user.
  const updateUserHandler = (userId, updatedName, updatedAge) => {
    // The updateUserHandler function is called when a user is updated, mapping through the usersList state to find and update the specified user // It takes the userId, updatedName, and updatedAge as parameters. // It uses the setUsersList function to update the usersList state.
    setUsersList((prevUsersList) => {
      return prevUsersList.map((user) =>
        user.id === userId // The map method creates a new array by iterating over each user in the previous users list
          ? { ...user, name: updatedName, age: updatedAge } // If the user ID matches, a new user object is created with the updated name and age
          : user
      );
      // If the user ID does not match, the original user object is returned unchanged
    });
  };
  // The App component serves as the main application component
  // It manages the state of the users list and provides functions to add, remove, and update users.
  // It renders the AddUser component for adding new users and the UsersList component for displaying the list of users.
  // The usersList state holds an array of user objects, each with a name, age, and unique ID.
  // The addUserHandler function is called when a new user is added, updating the usersList state.
  // The removeUserHandler function is called when a user is removed, filtering the usersList state.
  // The updateUserHandler function is called when a user is updated, mapping through the usersList state to find and update the specified user.
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {/* The AddUser component is responsible for adding new users to the list */}
      {/* It receives the addUserHandler function as a prop to handle user addition */}
      {/* The UsersList component is responsible for displaying the list of users */}
      {/* It receives the usersList state, removeUserHandler, and updateUserHandler functions as props */}
      <hr />
      {/* The hr element is used to create a horizontal line for visual separation */}
      {/* The UsersList component renders the list of users, allowing for user removal and updates */}
      <UsersList
        users={usersList}
        onRemoveUser={removeUserHandler}
        onUpdateUser={updateUserHandler}
      />
      {/* The UsersList component receives the usersList state, removeUserHandler, and updateUserHandler functions as props */}
      {/* This allows it to display the list of users and provide functionality for removing and updating users */}
      {/* The onRemoveUser prop is used to remove a user from the list */}
      {/* The onUpdateUser prop is used to update a user's information in the list */}
      {/* The App component serves as the main application component */}
      {/* It manages the state of the users list and provides functions to add, remove, and update users */}
      {/* The usersList state holds an array of user objects, each with a name, age, and unique ID */}
      {/* The addUserHandler function is called when a new user is added, updating the usersList state */}
      {/* The removeUserHandler function is called when a user is removed, filtering the usersList state */}
      {/* The updateUserHandler function is called when a user is updated, mapping through the usersList state to find and update the specified user */}
    </>
  );
}

export default App;
