  // Import the React library to use JSX and React features
  import React from 'react'
  // Import CSS module styles for the button component
  import classes from './Button.module.css'

  // Define a functional Button component that accepts props
  const Button = (props) => {
    return (
      // Render a div as a wrapper for the button element
      <div>
        {/* Render a button element with dynamic class names and properties */}
        <button
          // Combine the CSS module button class with any additional className passed via props
          className={`${classes.button} ${props.className}`}
          // Set the button type (default to 'button' if not provided)
          type={props.type || 'button'}
          // Assign the onClick event handler from props
          onClick={props.onClick}
          // Set the disabled state based on props
          disabled={props.disabled}
        >
          {/* Render any child elements or text passed to the Button component */}
          {props.children}
        </button>
      </div>
    )
  }

  // Export the Button component as the default export of this file
  export default Button