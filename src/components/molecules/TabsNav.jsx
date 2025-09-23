import React, { useState } from "react";
import { useSelector } from "react-redux";
import DropdownMenu from "../atoms/DropdownMenu";

const TabsNav = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const handleClick = (id) => {
    setActiveTab(id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  return (
    <div className={`flex items-center space-x-2 border-b ${isDarkMode ? 'border-gray-700 bg-dark-bg' : 'border-gray-200 bg-white'} px-4`}>
      {tabs.map((tab) => (
        <div key={tab.id} className="relative">
          {tab.dropdown ? (
            <DropdownMenu
              label={tab.label}
              icon={tab.icon}
              items={tab.dropdown}
              activeItemId={activeTab}
              onItemSelect={handleClick}
              isDarkMode={isDarkMode}
            />
          ) : (
            <button
              onClick={() => handleClick(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${
                  activeTab === tab.id
                    ? isDarkMode
                      ? "bg-indigo-900/30 text-indigo-300"
                      : "bg-indigo-100 text-indigo-600"
                    : isDarkMode
                      ? "text-gray-300 hover:bg-gray-700/50"
                      : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {tab.icon && <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabsNav;
