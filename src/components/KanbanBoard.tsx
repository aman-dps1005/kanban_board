import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskCard from "./TaskCard";

const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: "1", title: "Task 1", description: "Task 1 description" },
      { id: "2", title: "Task 2", description: "Task 2 description" },
    ],
    inProgress: [
      { id: "3", title: "Task 3", description: "Task 3 description" },
    ],
    peerReview: [
      { id: "4", title: "Task 4", description: "Task 4 description" },
    ],
    done: [
      { id: "5", title: "Task 5", description: "Task 5 description" },
    ],
  });

  const moveTask = (taskId: string, targetColumn: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      // Find and remove the task from its original column
      const task = Object.keys(updatedTasks).reduce((task, column) => {
        //@ts-ignore
        const index = updatedTasks[column].findIndex((task) => task.id === taskId);
        if (index > -1) {
          //@ts-ignore
          task = updatedTasks[column].splice(index, 1)[0]; // Remove task from column
        }
        return task;
      }, null);

      if (task) {
        // Add the task to the target column
        //@ts-ignore
        updatedTasks[targetColumn].push(task);
      }

      return updatedTasks;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Kanban Board</h1>
        <div className="grid grid-cols-4 gap-4">
          {/* To Do Column */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-3">To Do</h2>
            {tasks.todo.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                moveTask={moveTask}
              />
            ))}
          </div>

          {/* In Progress Column */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-3">In Progress</h2>
            {tasks.inProgress.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                moveTask={moveTask}
              />
            ))}
          </div>

          {/* Peer Review Column */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-3">Peer Review</h2>
            {tasks.peerReview.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                moveTask={moveTask}
              />
            ))}
          </div>

          {/* Done Column */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-3">Done</h2>
            {tasks.done.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                moveTask={moveTask}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
