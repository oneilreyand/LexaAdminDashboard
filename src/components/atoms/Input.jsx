import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  className = '',
  error = false,
  ...props
}) => {
  const baseClasses = 'w-full bg-transparent outline-none text-sm border border-gray-300 focus:border-blue-400 placeholder-gray-500 dark:placeholder-gray-400 rounded px-3 py-2 transition-colors';

  const errorClasses = error ? 'border-red-500 focus:border-red-500' : '';

  const classes = `${baseClasses} ${errorClasses} ${className}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classes}
      {...props}
    />
  );
};

export default Input;
