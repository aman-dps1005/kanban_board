import React from "react";
import { useDrag } from "react-dnd";

const ItemType = "TASK"; // Define the item type for drag-and-drop

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  moveTask: (taskId: string, targetColumn: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, description, moveTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id }, // Dragging the task by its ID
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-blue-100 rounded shadow p-4 mb-4 cursor-pointer ${
        isDragging ? "opacity-50" : ""
      }`}
      onClick={() => moveTask(id, "newColumn")} // Update with the correct target column logic
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default TaskCard;
