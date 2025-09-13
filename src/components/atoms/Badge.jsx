import React from 'react';

const Badge = ({ 
  count, 
  variant = 'primary', 
  size = 'small', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'rounded-full text-white font-medium';
  
  const variantClasses = {
    primary: 'bg-custom-blue-500',
    secondary: 'bg-gray-600',
    danger: 'bg-red-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-400'
  };

  const sizeClasses = {
    small: 'text-[10px] px-1.5 py-0.5',
    medium: 'text-xs px-2 py-1',
    large: 'text-sm px-2.5 py-1'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (!count) return null;

  return (
    <span className={classes} {...props}>
      {count}
    </span>
  );
};

export default Badge;
