import React, { useState, useRef } from 'react';

const Tooltip = ({ children, content, position = 'top', className = '', ...props }) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    clearTimeout(timeoutRef.current);
    setVisible(true);
  };

  const hideTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 100);
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return {
          tooltip: 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
          arrow: 'top-full left-1/2 -translate-x-1/2'
        };
      case 'bottom':
        return {
          tooltip: 'top-full mt-2 left-1/2 transform -translate-x-1/2',
          arrow: 'bottom-full left-1/2 -translate-x-1/2'
        };
      case 'left':
        return {
          tooltip: 'right-full mr-2 top-1/2 transform -translate-y-1/2',
          arrow: 'left-full top-1/2 -translate-y-1/2'
        };
      case 'right':
        return {
          tooltip: 'left-full ml-2 top-1/2 transform -translate-y-1/2',
          arrow: 'right-full top-1/2 -translate-y-1/2'
        };
      default:
        return {
          tooltip: 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
          arrow: 'top-full left-1/2 -translate-x-1/2'
        };
    }
  };

  const { tooltip: tooltipPosition, arrow: arrowPosition } = getPositionClasses();

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      tabIndex={0}
      {...props}
    >
      {children}
      {visible && (
        <div
          className={`absolute z-50 ${tooltipPosition} whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white shadow-lg ${className}`}
          role="tooltip"
        >
          {content}
          <div className={`absolute ${arrowPosition} w-2 h-2 bg-gray-900 rotate-45`}></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
