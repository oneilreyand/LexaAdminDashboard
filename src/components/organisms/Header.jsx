import React from "react";
import { Bell, Sun, Moon, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../store/action/theme";
import SearchInput from "../molecules/SearchInput";
import IconButton from "../atoms/IconButton";
import Avatar from "../atoms/Avatar";
import NotificationButton from "../molecules/NotificationButton";

const Header = ({toggleSidebar}) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark-bg shadow-sm border-b border-slate/20 dark:border-gray-700 flex items-center justify-between px-4 py-2">
        <IconButton
          icon={<Menu className="h-6 w-6 text-slate dark:text-gray-300" />}
          variant="ghost"
          size="medium"
          className="md:hidden"
          onClick={toggleSidebar}
        />

      {/* Search */}
      <div className="hidden md:flex items-center w-full max-w-md">
        <SearchInput placeholder="Search [CTRL + K]" />
      </div>

      {/* Right icons */}
      <div className="flex items-center space-x-4 ml-4">
        <IconButton
          icon={isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate dark:text-gray-400" />}
          variant="ghost"
          size="medium"
          onClick={handleToggleDarkMode}
        />
        <NotificationButton
          icon={<Bell className="h-5 w-5 text-slate dark:text-gray-400" />}
          count={3}
          variant="ghost"
          size="medium"
        />
        {/* Avatar */}
        <Avatar
          src="https://i.pravatar.cc/40"
          alt="User"
          size="medium"
        />
      </div>
    </header>
  );
};

export default Header;
