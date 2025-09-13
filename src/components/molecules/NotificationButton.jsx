import React from 'react';
import IconButton from '../atoms/IconButton';
import Badge from '../atoms/Badge';

const NotificationButton = ({ 
  icon, 
  count, 
  variant = 'ghost', 
  size = 'medium', 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`relative ${className}`}>
      <IconButton 
        icon={icon} 
        variant={variant} 
        size={size} 
        {...props} 
      />
      {count > 0 && (
        <Badge 
          count={count} 
          variant="danger" 
          size="small" 
          className="absolute -top-1 -right-1" 
        />
      )}
    </div>
  );
};

export default NotificationButton;
