import React from "react";
import { useSelector } from 'react-redux';
import KanbanBoard from "../components/organisms/KanbanBoard";

export default function Kanban() {
  const isSidebarCollapsed = useSelector(state => state.sidebar.isCollapsed);

  const getContainerWidth = () => {
    if (isSidebarCollapsed) {
      // Sidebar collapsed (4rem = 64px)
      return 'calc(100vw - 7rem)';
    } else {
      // Sidebar expanded (16rem = 256px)
      return 'calc(100vw - 19rem)';
    }
  };

  return (
    <div className={`h-[calc(100vh-8rem)] flex flex-col bg-white dark:bg-gray-900 min-w-0 max-w-none`} style={{ width: getContainerWidth() }}>
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Kanban Board
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Manage your tasks and projects with kanban view
        </p>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <KanbanBoard />
      </div>
    </div>
  );
}
