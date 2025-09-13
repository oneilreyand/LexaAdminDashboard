import React from 'react';

const IconButton = ({ 
  icon, 
  variant = 'ghost', 
  size = 'medium', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-custom-blue-500 hover:bg-custom-blue-600 text-white focus:ring-custom-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-600',
    ghost: 'bg-transparent hover:bg-gray-600/20 text-gray-600 dark:hover:bg-gray-700 dark:text-gray-400 focus:ring-gray-500',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
    success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500'
  };

  const sizeClasses = {
    small: 'p-1.5',
    medium: 'p-2',
    large: 'p-3'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;
