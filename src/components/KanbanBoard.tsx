import React from "react";
import TaskCard from "./TaskCard";

const tasks = {
  todo: [
    { title: "Task 1", description: "Task 1 description" },
    { title: "Task 2", description: "Task 2 description" },
  ],
  inProgress: [
    { title: "Task 3", description: "Task 3 description" },
  ],
  peerReview: [
    { title: "Task 4", description: "Task 4 description" },
  ],
  done: [
    { title: "Task 5", description: "Task 5 description" },
  ],
};



const KanbanBoard: React.FC = () => {
  return (
    <div className="min-h-screen p-4 bg-slate-300">
      <h1 className="text-2xl font-bold text-center mb-6">Kanban Board</h1>
      <div className="grid grid-cols-4 gap-4">
        {/* To Do Column */}
        <div className="bg-white shadow rounded-md p-4 ">
          <h2 className="text-lg font-semibold mb-3 flex flex-col items-center">To Do</h2>
          {/* the elements will be displayed here */}
          {tasks.todo.map((task, index) => (
            <TaskCard key={index} title={task.title} description={task.description} />
          ))}
        </div>

        {/* In Progress Column */}
        <div className="bg-white shadow rounded-md p-4">
          <h2 className="text-lg font-semibold mb-3 flex flex-col items-center">In Progress</h2>
          {tasks.inProgress.map((task, index) => (
            <TaskCard key={index} title={task.title} description={task.description} />
          ))}
        </div>

        {/* Peer Review Column */}
        <div className="bg-white shadow rounded-md p-4">
          <h2 className="text-lg font-semibold mb-3 flex flex-col items-center">Peer Review</h2>
          {tasks.peerReview.map((task, index) => (
            <TaskCard key={index} title={task.title} description={task.description} />
          ))}
        </div>

        {/* Done Column */}
        <div className="bg-white shadow rounded-md p-4">
          <h2 className="text-lg font-semibold mb-3 flex flex-col items-center">Done</h2>
          {tasks.done.map((task, index) => (
            <TaskCard key={index} title={task.title} description={task.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
