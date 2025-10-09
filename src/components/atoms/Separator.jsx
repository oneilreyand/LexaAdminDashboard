import React from 'react';

const Separator = ({
  orientation = 'horizontal',
  className = '',
  ...props
}) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';
  const orientationClasses = orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full';

  const classes = `${baseClasses} ${orientationClasses} ${className}`;

  return (
    <div className={classes} {...props} />
  );
};

export default Separator;
