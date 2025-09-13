import React from 'react';

const Avatar = ({ 
  src, 
  alt = 'Avatar', 
  size = 'medium',
  className = '',
  fallback = null,
  ...props 
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  };

  const baseClasses = 'rounded-full object-cover flex items-center justify-center bg-gray-200 dark:bg-gray-600';

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={classes}
        {...props}
      />
    );
  }

  return (
    <div className={classes} {...props}>
      {fallback || (
        <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">
          {alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default Avatar;
