import React from 'react';
import './Button.css';

export const Button = ({ variant = 'primary', theme = 'light', type = 'button', children, ...props }) => {
  const buttonClass = `button button-${variant} ${theme === 'dark' ? 'dark' : ''}`;
  
  return (
    <button className={buttonClass} type={type} {...props}>
      {children}
    </button>
  );
};