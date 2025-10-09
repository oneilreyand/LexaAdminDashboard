import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import KanbanColumn from "../molecules/KanbanColumn";
import KanbanCardOffCanvas from "./KanbanCardOffCanvas";

export default function KanbanBoard() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  // Sample data - in a real app, this would come from props or API
  const [columns, setColumns] = useState([
    {
      id: "backlog",
      title: "Backlog",
      cards: [
        {
          id: "1",
          title: "Research user requirements",
          description: "Conduct user interviews and gather requirements for new features",
          priority: "medium",
          assignee: "Product Team",
          labels: ["Research", "Planning"],
          dueDate: "2024-02-01",
          comments: 2
        },
        {
          id: "2",
          title: "Create project documentation",
          description: "Write comprehensive documentation for the project architecture",
          priority: "low",
          assignee: "Tech Writer",
          labels: ["Documentation"],
          dueDate: "2024-02-15",
          comments: 0
        }
      ]
    },
    {
      id: "pending",
      title: "Pending",
      cards: [
        {
          id: "3",
          title: "Design new landing page",
          description: "Create wireframes and mockups for the new landing page design",
          priority: "high",
          assignee: "John Doe",
          labels: ["Design", "Frontend"],
          dueDate: "2024-01-15",
          comments: 3
        },
        {
          id: "4",
          title: "Setup CI/CD pipeline",
          description: "Configure automated testing and deployment pipeline",
          priority: "medium",
          assignee: "Jane Smith",
          labels: ["DevOps", "Backend"],
          dueDate: "2024-01-20",
          comments: 1
        }
      ]
    },
    {
      id: "todo",
      title: "To Do",
      cards: [
        {
          id: "7",
          title: "Write unit tests",
          description: "Create comprehensive unit tests for all new features",
          priority: "medium",
          assignee: "QA Team",
          labels: ["Testing", "Quality"],
          dueDate: "2024-01-25",
          comments: 0
        },
        {
          id: "8",
          title: "Update API documentation",
          description: "Update API documentation with new endpoints and examples",
          priority: "low",
          assignee: "Tech Writer",
          labels: ["Documentation", "API"],
          dueDate: "2024-02-01",
          comments: 1
        }
      ]
    },
    {
      id: "inprogress",
      title: "In Progress",
      cards: [
        {
          id: "5",
          title: "Implement user authentication",
          description: "Add login, register, and password reset functionality",
          priority: "high",
          assignee: "Mike Johnson",
          labels: ["Backend", "Security"],
          dueDate: "2024-01-10",
          comments: 5
        }
      ]
    },
    {
      id: "done",
      title: "Done",
      cards: [
        {
          id: "6",
          title: "Database schema design",
          description: "Design and implement the database schema for the new features",
          priority: "medium",
          assignee: "Sarah Wilson",
          labels: ["Database", "Backend"],
          dueDate: "2024-01-05",
          comments: 2
        }
      ]
    }
  ]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setOffCanvasOpen(true);
  };

  const handleCloseOffCanvas = () => {
    setOffCanvasOpen(false);
    // Delay setting selectedCard to null to prevent transition issues
    setTimeout(() => {
      setSelectedCard(null);
    }, 300); // Match the transition duration
  };

  const moveCard = (cardId, sourceColumnId, destinationColumnId) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns];

      // Find source and destination columns
      const sourceColumn = newColumns.find(col => col.id === sourceColumnId);
      const destColumn = newColumns.find(col => col.id === destinationColumnId);

      if (!sourceColumn || !destColumn) return prevColumns;

      // Find the card to move
      const cardIndex = sourceColumn.cards.findIndex(card => card.id === cardId);
      if (cardIndex === -1) return prevColumns;

      // Remove card from source column
      const [movedCard] = sourceColumn.cards.splice(cardIndex, 1);

      // Add card to destination column
      destColumn.cards.push(movedCard);

      return newColumns;
    });
  };

  const addCard = (columnId, newCard) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      const targetColumn = newColumns.find(col => col.id === columnId);

      if (targetColumn) {
        // Check if card with same ID already exists to prevent duplicates
        const existingCard = targetColumn.cards.find(card => card.id === newCard.id);
        if (!existingCard) {
          targetColumn.cards.push(newCard);
        }
      }

      return newColumns;
    });
  };

  const deleteCard = (cardId, columnId) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      const targetColumn = newColumns.find(col => col.id === columnId);

      if (targetColumn) {
        targetColumn.cards = targetColumn.cards.filter(card => card.id !== cardId);
      }

      return newColumns;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-full flex flex-col">
        <div className="flex-none">
          <KanbanCardOffCanvas
            isOpen={offCanvasOpen}
            onClose={handleCloseOffCanvas}
            card={selectedCard}
          />
        </div>
        <div className="flex-1 overflow-x-auto overflow-y-hidden">
          <div className="flex gap-8 p-8 min-w-max">
            {columns.map((column) => (
              <KanbanColumn
                key={column.id}
                id={column.id}
                title={column.title}
                cards={column.cards}
                onCardClick={handleCardClick}
                onCardMove={moveCard}
                onAddCard={addCard}
                onDeleteCard={deleteCard}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
