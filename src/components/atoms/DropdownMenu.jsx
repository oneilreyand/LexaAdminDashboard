import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const DropdownMenu = ({ label, icon, items, activeItemId, onItemSelect, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemId) => {
    setIsOpen(false);
    if (onItemSelect) {
      onItemSelect(itemId);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
          ${
            activeItemId && items.some(item => item.id === activeItemId)
              ? isDarkMode 
                ? "bg-indigo-900/30 text-indigo-300" 
                : "bg-indigo-100 text-indigo-600"
              : isDarkMode
                ? "text-gray-300 hover:bg-gray-700/50"
                : "text-gray-600 hover:bg-gray-100"
          }
        `}
      >
        {icon && <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{icon}</span>}
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
      </button>
      {isOpen && (
        <div className={`absolute left-0 mt-1 w-40 rounded-md ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-md border z-10`}>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors
                ${
                  activeItemId === item.id
                    ? isDarkMode
                      ? "bg-indigo-900/30 text-indigo-300"
                      : "bg-indigo-100 text-indigo-600"
                    : isDarkMode
                      ? "text-gray-300 hover:bg-gray-700/50"
                      : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
