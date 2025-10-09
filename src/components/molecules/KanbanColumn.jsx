import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Button from "../atoms/Button";
import KanbanCard from "../atoms/KanbanCard";
import KanbanCardHeader from "./KanbanCardHeader";
import KanbanCardContent from "./KanbanCardContent";

export default function KanbanColumn({
  id,
  title,
  cards = [],
  onCardClick,
  onCardMove,
  onAddCard,
  onDeleteCard,
  className = ""
}) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const [{ isOver }, drop] = useDrop({
    accept: 'KANBAN_CARD',
    drop: (item) => {
      if (item.sourceColumnId !== id) {
        onCardMove && onCardMove(item.cardId, item.sourceColumnId, id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (newTaskTitle.trim()) {
      const newCard = {
        id: `card-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        title: newTaskTitle.trim(),
        description: "",
        priority: "medium",
        assignee: null,
        labels: [],
        dueDate: null,
        comments: 0,
        createdAt: new Date().toISOString(),
      };

      onAddCard && onAddCard(id, newCard);
      setNewTaskTitle("");
      setShowAddForm(false);
    }
  };

  const handleCancelAdd = () => {
    setNewTaskTitle("");
    setShowAddForm(false);
  };
  return (
    <div
      ref={drop}
      className={`flex flex-col w-80 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-colors duration-200 ${
        isOver ? 'bg-blue-100 dark:bg-blue-900' : ''
      } ${className}`}
    >
      <div className="mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
          {title}
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {cards.length} tasks
        </span>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto max-h-[32rem]">
        {cards.map((card) => (
          <KanbanCard
            key={card.id}
            id={card.id}
            columnId={id}
            onClick={() => onCardClick && onCardClick(card)}
            onDelete={() => onDeleteCard && onDeleteCard(card.id, id)}
          >
            <KanbanCardHeader
              title={card.title}
              priority={card.priority}
              assignee={card.assignee}
              labels={card.labels}
            />
            <KanbanCardContent
              description={card.description}
              dueDate={card.dueDate}
              comments={card.comments}
            />
          </KanbanCard>
        ))}

        {/* Add Task Button */}
        {!showAddForm ? (
          <Button
            styleType="outline"
            variant="secondary"
            size="small"
            className="w-full justify-center"
            onClick={() => setShowAddForm(true)}
          >
            Add Task
          </Button>
        ) : (
          <form onSubmit={handleAddTask}>
            <input
              type="text"
              placeholder="Enter task title..."
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              onKeyDown={(e) => {
                if (e.key === 'Escape') handleCancelAdd();
              }}
              autoFocus
            />
            <div className="flex gap-2 mt-2">
              <Button
                styleType="basic"
                variant="primary"
                size="small"
                onClick={handleAddTask}
                disabled={!newTaskTitle.trim()}
                type="button"
              >
                Add
              </Button>
              <Button
                styleType="outline"
                variant="secondary"
                size="small"
                onClick={handleCancelAdd}
                type="button"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
