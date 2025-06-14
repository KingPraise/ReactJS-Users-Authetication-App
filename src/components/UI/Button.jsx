  import React from 'react'
  import classes from './Button.module.css'
  // Button component for reusable button styles
  // Accepts props for type, onClick handler, disabled state, and additional class names
  const Button = (props) => {
    return (
      <div>
        {/* Button element with dynamic classes and properties */}
        <button
          className={`${classes.button} ${props.className}`}
          type={props.type || 'button'}
          onClick={props.onClick}
          disabled={props.disabled}
        >
        {/* Button content */}
          {props.children}
        </button>
        
      </div>
    )
  }
  
  export default Button