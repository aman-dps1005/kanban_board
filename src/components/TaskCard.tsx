import React from "react";

interface TaskCardProps {
  title: string;
  description: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description }) => {
  return (
    <div className="bg-blue-100 rounded shadow p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default TaskCard;
