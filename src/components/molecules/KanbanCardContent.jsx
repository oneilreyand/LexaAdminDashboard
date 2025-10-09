import React from "react";

export default function KanbanCardContent({ description, dueDate, comments = 0 }) {
  return (
    <div className="text-xs text-gray-600 dark:text-gray-300 px-1">
      {description && (
        <p className="line-clamp-3 mb-2">{description}</p>
      )}

      <div className="flex items-center justify-between">
        {dueDate && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Due: {dueDate}
          </span>
        )}

        {comments > 0 && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            💬 {comments}
          </span>
        )}
      </div>
    </div>
  );
}
