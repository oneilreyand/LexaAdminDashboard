import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'p-4',
  ...props 
}) => {
  const baseClasses = 'rounded-lg border bg-white dark:bg-gray-800 shadow-sm';
  
  const variantClasses = {
    default: 'border-gray-200 dark:border-gray-700',
    primary: 'border-custom-blue-200 dark:border-custom-blue-700',
    success: 'border-green-200 dark:border-green-700',
    warning: 'border-yellow-200 dark:border-yellow-700',
    danger: 'border-red-200 dark:border-red-700'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${padding} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
