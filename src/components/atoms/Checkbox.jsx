import React from 'react';

const Checkbox = ({
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'w-4 h-4 accent-[#7183e8] border border-gray-300 rounded focus:ring-2 focus:ring-offset-2 focus:ring-[#7183e8] dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600';

  const classes = `${baseClasses} ${className}`;

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={classes}
      {...props}
    />
  );
};

export default Checkbox;
