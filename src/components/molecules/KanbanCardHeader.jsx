import React from "react";
import KanbanAvatar from "../atoms/KanbanAvatar";
import KanbanLabel from "../atoms/KanbanLabel";

export default function KanbanCardHeader({
  title,
  priority = "medium",
  assignee,
  labels = []
}) {
  const priorityColors = {
    low: "green",
    medium: "yellow",
    high: "red",
    urgent: "red"
  };

  return (
    <div className="mb-3">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-sm text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h4>
        {priority && (
          <KanbanLabel
            text={priority}
            color={priorityColors[priority]}
            className="ml-2 flex-shrink-0"
          />
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {labels.map((label, index) => (
            <KanbanLabel
              key={index}
              text={label}
              color="blue"
            />
          ))}
        </div>

        {assignee && (
          <KanbanAvatar
            name={assignee}
            size="small"
          />
        )}
      </div>
    </div>
  );
}
