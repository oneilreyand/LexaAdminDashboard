import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import Sidebar from "../components/organisms/Sidebar";
import Header from "../components/organisms/Header";
import Snackbar from "../components/organisms/Snackbar";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../pages/ErrorBoundary";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark bg-dark-bg' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Floating Header */}
        <div className="sticky top-0 z-20 bg-white dark:bg-dark-bg shadow-md mx-6 my-4 rounded-xl">
          <Header toggleSidebar={toggleSidebar}/>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-6 pb-6">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
      </div>

      {/* Global Snackbar */}
      <Snackbar />
    </div>
  );
}
