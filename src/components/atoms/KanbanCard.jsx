import React from "react";
import { useDrag } from "react-dnd";
import { X } from "lucide-react";

export default function KanbanCard({ id, columnId, children, onClick, onDelete, className = "" }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'KANBAN_CARD',
    item: {
      cardId: id,
      sourceColumnId: columnId,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevent card click when delete is clicked
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div
      ref={drag}
      className={`flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 cursor-pointer hover:shadow-md transition-all duration-200 relative ${
        isDragging ? 'opacity-50 rotate-3' : ''
      } ${className}`}
      onClick={onClick}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      {/* Delete Icon */}
      {onDelete && (
        <div className="flex justify-end mb-3">
          <div
            className="p-1.5 h-6 w-6 flex items-center justify-center cursor-pointer hover:bg-red-100 dark:hover:bg-red-900 rounded transition-colors"
            onClick={handleDeleteClick}
            title="Delete task"
          >
            <X className="h-3 w-3 text-gray-400 hover:text-red-500 transition-colors" />
          </div>
        </div>
      )}

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
