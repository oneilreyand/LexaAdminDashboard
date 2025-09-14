import React, { useState, useRef, useEffect } from 'react';

const Popover = ({ children, open, onOpenChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(open || false);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  const handleToggle = () => {
    const newOpen = !isOpen;
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  const handleClickOutside = (event) => {
    if (
      triggerRef.current &&
      !triggerRef.current.contains(event.target) &&
      contentRef.current &&
      !contentRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      onOpenChange?.(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const trigger = React.Children.toArray(children).find(
    (child) => child.type === PopoverTrigger
  );
  const content = React.Children.toArray(children).find(
    (child) => child.type === PopoverContent
  );

  return (
    <div className="relative" {...props}>
      {trigger && React.cloneElement(trigger, { ref: triggerRef, onClick: handleToggle })}
      {isOpen && content && (
        <div
          ref={contentRef}
          className="absolute z-50 mt-1"
          style={{ top: '100%', left: 0 }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const PopoverTrigger = React.forwardRef(({ children, asChild, ...props }, ref) => {
  if (asChild) {
    return React.cloneElement(children, { ref, ...props });
  }
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

const PopoverContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-md shadow-lg p-4 dark:bg-dark-bg dark:border-dark-sidebar dark:text-dark-text ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Popover, PopoverTrigger, PopoverContent };
