import React from 'react';
import { useSelector } from 'react-redux';

const Spinner = ({
  type = 'spinner',
  size = 'medium',
  color = 'primary',
  className = '',
  ...props
}) => {
  const sizeMap = {
    small: 16,
    medium: 24,
    large: 32
  };

  const growingSizeMap = {
    small: 12,
    medium: 16,
    large: 20
  };

  const colorHexMap = {
    primary: '#7183e8',
    secondary: '#6b7280',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#06b6d4',
    dark: '#111827',
    white: '#ffffff'
  };

  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const spinnerColorHex = colorHexMap[color] || colorHexMap.primary;

  if (type === 'spinner') {
    const style = {
      width: sizeMap[size],
      height: sizeMap[size],
      border: '3px solid var(--border-color)',
      borderTop: `3px solid ${spinnerColorHex}`,
      borderRadius: '50%',
      animationDuration: '0.8s',
      boxSizing: 'border-box',
      '--border-color': isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    };

    return (
      <div className={`animate-spin ${className}`} style={style} {...props}></div>
    );
  } else if (type === 'growing') {
    const colorMap = {
      primary: 'blue-600',
      secondary: 'gray-600',
      success: 'green-600',
      danger: 'red-600',
      warning: 'yellow-600',
      info: 'blue-600',
      dark: 'gray-900',
      white: 'white'
    };

    const spinnerColor = colorMap[color] || colorMap.primary;
    const spinnerClasses = `inline-block bg-${spinnerColor} rounded-full animate-ping`;
    const classes = `${spinnerClasses} ${className}`;

    const style = {
      width: growingSizeMap[size],
      height: growingSizeMap[size],
    };

    return (
      <div className={classes} style={style} {...props}></div>
    );
  }

  return null;
};

export default Spinner;
