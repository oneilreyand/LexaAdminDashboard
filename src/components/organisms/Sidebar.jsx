import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setSidebarCollapsed } from '../../store/action/sidebar';
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
  Kanban as KanbanIcon,
  Video,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuSection from "./MenuSection";

const menuItems = [
  { label: "Dashboards", icon: <LayoutDashboard size={20} />, path: "/dashboard", badge: 5 },
  { label: "Components", icon: <Box size={20} />, path: "/components" },
  { label: "Course Video", icon: <Video size={20} />, path: "/list-video" },
  { label: "Buddy", icon: <Users size={20} />, path: "/buddy" },
  { label: "eCommerce", icon: <ShoppingCart size={20} />, path: "/ecommerce" },
  { label: "Logistics", icon: <Package size={20} />, path: "/logistics" },
  { label: "Academy", icon: <GraduationCap size={20} />, path: "/academy" },
  { label: "Layouts", icon: <Layers size={20} />, path: "/layouts" },
];

const appsPages = [
  { label: "Calendar", icon: <Calendar size={20} />, path: "/calendar" },
  { label: "Kanban", icon: <KanbanIcon size={20} />, path: "/kanban" },
  { label: "Settings", icon: <Settings2 size={20} />, path: "/settings" },
];

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSidebarWidth = () => {
      const sidebar = document.querySelector('aside');
      if (sidebar) {
        const computedStyle = window.getComputedStyle(sidebar);
        const width = parseInt(computedStyle.width);
        // If width is around 4rem (64px), it's collapsed
        const isCollapsed = width <= 80;
        dispatch(setSidebarCollapsed(isCollapsed));
      }
    };

    // Check on mount and when window resizes
    checkSidebarWidth();
    window.addEventListener('resize', checkSidebarWidth);

    // Also listen for mouse events to detect hover state
    const handleMouseEnter = () => dispatch(setSidebarCollapsed(false));
    const handleMouseLeave = () => dispatch(setSidebarCollapsed(true));

    const sidebar = document.querySelector('aside');
    if (sidebar) {
      sidebar.addEventListener('mouseenter', handleMouseEnter);
      sidebar.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', checkSidebarWidth);
      if (sidebar) {
        sidebar.removeEventListener('mouseenter', handleMouseEnter);
        sidebar.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [dispatch]);

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
