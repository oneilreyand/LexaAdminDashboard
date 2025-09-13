import React from 'react';

const MenuItem = ({ 
  icon, 
  label, 
  badge, 
  isActive = false, 
  onClick, 
  className = '', 
  activeStyle = "background" // opsi: "background" | "border-left" | "dot"
}) => {
  // Tentukan style berdasarkan props activeStyle
  const getActiveClasses = () => {
    switch (activeStyle) {
      case "border-left":
        return "bg-sub-menu-active/20 text-sub-menu-active border-l-4 border-sub-menu-active font-medium";
      case "dot":
        return "bg-sub-menu-active/10 text-sub-menu-active font-medium relative before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-sub-menu-active before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 pl-6";
      default: // background penuh (tanpa garis)
        return "bg-sub-menu-active/20 text-sub-menu-active font-medium";
    }
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors duration-200
        ${isActive ? getActiveClasses() : "hover:bg-gray-600/20 text-sidebar-text dark:text-dark-text"}
        ${className}
      `}
    >
      <div className="flex items-center space-x-3">
        <span className={isActive ? "text-sub-menu-active" : "text-sidebar-text dark:text-dark-text"}>
          {icon}
        </span>
        <span
          className="
            text-md 
            whitespace-nowrap 
            transition-opacity duration-300 ease-out
            block
            md:opacity-0 md:group-hover:opacity-100
          "
        >
          {label}
        </span>
      </div>
      {badge && (
        <span 
          className={`
            bg-custom-blue-500 
            text-white 
            text-xs 
            rounded-full 
            px-2 py-1 min-w-[20px] text-center
            transition-opacity duration-300 ease-out
            ${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}
          `}
        >
          {badge}
        </span>
      )}
    </div>
  );
};

export default MenuItem;
