import React from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  GraduationCap,
  Mail,
  MessageSquare,
  Calendar,
  Settings2,
  Layers,
  Box,
  X,
  Users,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuSection from "./MenuSection";

const menuItems = [
  { label: "Dashboards", icon: <LayoutDashboard size={20} />, path: "/dashboard", badge: 5 },
  { label: "Components", icon: <Box size={20} />, path: "/components" },
  { label: "CRM", icon: <Users size={20} />, path: "/crm" },
  { label: "eCommerce", icon: <ShoppingCart size={20} />, path: "/ecommerce" },
  { label: "Logistics", icon: <Package size={20} />, path: "/logistics" },
  { label: "Academy", icon: <GraduationCap size={20} />, path: "/academy" },
  { label: "Layouts", icon: <Layers size={20} />, path: "/layouts" },
];

const appsPages = [
  { label: "Email", icon: <Mail size={20} />, path: "/email" },
  { label: "Chat", icon: <MessageSquare size={20} />, path: "/chat" },
  { label: "Calendar", icon: <Calendar size={20} />, path: "/calendar" },
  { label: "Settings", icon: <Settings2 size={20} />, path: "/settings" },
];

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    navigate(path);
    // otomatis nutup sidebar di mobile setelah klik menu
    if (closeSidebar) closeSidebar();
  };

  return (
    <aside
      className={`
      fixed md:static top-0 left-0 h-screen bg-sidebar-bg dark:bg-dark-sidebar text-sidebar-text dark:text-dark-text shadow-md border-r border-slate/20 flex flex-col z-50
      transform transition-all duration-500 ease-out
      ${isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"}
      md:translate-x-0 md:w-16 md:hover:w-64
      group
    `}

    >
      {/* Header mobile close button */}
      <div className="p-5 flex items-center justify-between md:justify-start space-x-3">
        <div className="flex items-center space-x-3">
          <span className="text-sub-menu-active text-2xl">⚡</span>
          <span
            className="
            font-bold text-xl text-sidebar-text dark:text-dark-text
            block
            md:opacity-0 md:group-hover:opacity-100"
            >
            Next Dashboard
          </span>
        </div>
        <button
          onClick={closeSidebar}
          className="md:hidden p-2 rounded hover:bg-gray-600/20 transition-colors duration-200"
        >
          <X size={20} className="text-sidebar-text dark:text-dark-text" />
        </button>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 px-2 overflow-y-auto">
        <MenuSection
          title="Main Menu"
          items={menuItems}
          location={location}
          onItemClick={handleClick}
        />
        <MenuSection
          title="Sub Menu"
          items={appsPages}
          location={location}
          onItemClick={handleClick}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
