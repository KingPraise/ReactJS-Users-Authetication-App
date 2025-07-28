// Import the AddUser component from the Users folder
import AddUser from "./components/Users/AddUser";
// Import React and the useState hook from the react library
import React, { useState } from "react";
// Import the UsersList component from the Users folder
import UsersList from "./components/Users/UsersList";

// Define the main App component
function App() {
  // Declare a state variable usersList to store the list of users, initialized as an empty array
  const [usersList, setUsersList] = useState([]);

  // Function to add a new user to the usersList state
  // Takes uName (user's name) and uAge (user's age) as parameters
  const addUserHandler = (uName, uAge) => {
    // Update usersList by adding a new user object to the existing array
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList, // Spread the previous users into the new array
        { name: uName, age: uAge, id: Math.random().toString() }, // Add new user with unique id
      ];
    });
  };

  // Function to remove a user from usersList by their unique id
  // Takes userId as a parameter
  const removeUserHandler = (userId) => {
    // Update usersList by filtering out the user with the specified id
    setUsersList((prevUsersList) => {
      return prevUsersList.filter((user) => user.id !== userId); // Keep users whose id does not match userId
    });
  };

  // Function to update a user's name and age in usersList
  // Takes userId, updatedName, and updatedAge as parameters
  const updateUserHandler = (userId, updatedName, updatedAge) => {
    // Update usersList by mapping through each user
    setUsersList((prevUsersList) => {
      return prevUsersList.map((user) =>
        user.id === userId // Check if the current user's id matches the provided userId
          ? { ...user, name: updatedName, age: updatedAge } // If match, return updated user object
          : user // Otherwise, return the user unchanged
      );
    });
  };

  // Render the App component UI
  return (
    <>
      {/* Render the AddUser component and pass addUserHandler as the onAddUser prop */}
      <AddUser onAddUser={addUserHandler} />
      {/* Render a horizontal line for separation */}
      <hr />
      {/* Render the UsersList component and pass usersList, removeUserHandler, and updateUserHandler as props */}
      <UsersList
        users={usersList}
        onRemoveUser={removeUserHandler}
        onUpdateUser={updateUserHandler}
      />
    </>
  );
}

// Export the App component as the default export
export default App;
