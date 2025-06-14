import React from "react";
import classes from "./Card.module.css";

// Card component for reusable card styles
// Accepts props for additional class names and children elements
const Card = (props) => {
  // The Card component is a simple wrapper that applies styles from Card.module.css
  // It allows you to pass additional class names and children elements to customize its appearance and content.
  return (
    <div>
      <div className={`${classes.card} ${props.className}`}>
        {/* The className prop allows you to pass additional CSS classes to the Card component */}
        {props.children}
      </div>
      {/* The children prop allows you to pass components or elements inside this Card component */}
      {/* This is useful for wrapping other components with a consistent style or layout. */}
    </div>
  );
};

export default Card;
