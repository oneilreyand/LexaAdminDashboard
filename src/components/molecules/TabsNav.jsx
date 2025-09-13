import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";

const TabsNav = ({ tabs, onTabChange }) => {
  // const [activeTab, setActiveTab] = useState(tabs[0]?.id || ""); // mencari tab pertama yang aktif
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const [openDropdown, setOpenDropdown] = useState(null);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const handleClick = (id) => {
    setActiveTab(id);
    setOpenDropdown(null);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  const handleDropdownToggle = (tabId) => {
    setOpenDropdown(openDropdown === tabId ? null : tabId);
  };

  return (
    <div className={`flex items-center space-x-2 border-b ${isDarkMode ? 'border-gray-700 bg-dark-bg' : 'border-gray-200 bg-white'} px-4`}>
      {tabs.map((tab) => (
        <div key={tab.id} className="relative">
          {tab.dropdown ? (
            <>
              <button
                onClick={() => handleDropdownToggle(tab.id)}
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
                <ChevronDown className={`w-4 h-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
              </button>
              {openDropdown === tab.id && (
                <div className={`absolute left-0 mt-1 w-40 rounded-md ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-md border z-10`}>
                  {tab.dropdown.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleClick(item.id)}
                      className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors
                        ${
                          activeTab === item.id
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
            </>
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
