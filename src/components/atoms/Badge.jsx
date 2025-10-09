import React from 'react';

const Badge = ({
  count,
  children,
  variant = 'primary',
  size = 'small',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center rounded-md font-medium';

  const variantClasses = {
    primary: 'bg-custom-blue-500 text-white',
    secondary: 'bg-gray-600 text-white',
    danger: 'bg-red-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-400 text-white'
  };

  const sizeClasses = {
    small: 'text-[10px] px-1.5 py-0.5',
    medium: 'text-xs px-2 py-1',
    large: 'text-sm px-2.5 py-1'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (count !== undefined && count !== null) {
    return (
      <span className={classes} {...props}>
        {count}
      </span>
    );
  }

  if (children) {
    return (
      <span className={classes} {...props}>
        {children}
      </span>
    );
  }

  return null;
};

export default Badge;
