import React from 'react';

const Label = ({ children, htmlFor, className = '', ...props }) => {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
