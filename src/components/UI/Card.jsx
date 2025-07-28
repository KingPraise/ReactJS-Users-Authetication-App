// Import the React library to use JSX and React features
import React from "react";
// Import CSS module styles from Card.module.css as a JavaScript object called 'classes'
import classes from "./Card.module.css";

// Define a functional component named Card that takes 'props' as its argument
const Card = (props) => {
  // Return JSX to render the Card component
  return (
    // Render a div as the outer wrapper (not strictly necessary, but could be for layout)
    <div>
      {/* Render another div with combined CSS classes for styling */}
      <div className={`${classes.card} ${props.className}`}>
        {/* Render any child elements or components passed to Card */}
        {props.children}
      </div>
      {/* End of the styled card container */}
    </div>
    // End of the outer wrapper div
  );
  // End of the Card component function
};

// Export the Card component as the default export from this file
export default Card;
