import { useState, useEffect } from 'react';
import type { Task, Column as ColumnType } from './types';
import { Column } from './Column';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useRecoilState } from 'recoil';
import { taskAtom } from './store/atoms/taskAtom';

const COLUMNS: ColumnType[] = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'PEER_REVIEW', title: 'Peer Review' },
  { id: 'DONE', title: 'Done' },
];

export default function App() {
  const [tasks, setTasks] = useRecoilState(taskAtom);//used recoil atom for tasks from local storage
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Load data from localStorage or initialize with empty tasks
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks([]); // Initialize with empty tasks
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle drag-and-drop events
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task['status'];

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  }

  // Handle task creation
  function handleTaskCreation(event: React.FormEvent) {
    event.preventDefault();

    const newTask: Task = {
      id: (tasks.length + 1).toString(), // Generate a new ID
      title: newTaskTitle,
      description: newTaskDescription,
      status: 'TODO', // Default column is 'TODO'
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTaskTitle('');
    setNewTaskDescription('');
    setFormVisible(false); // Hide form after task is created
  }

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Kanban Board
      </h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks..."
          className="p-2 rounded-lg border border-gray-300 w-1/2"
        />
      </div>

      <div className="flex flex-wrap justify-between gap-6">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={filteredTasks.filter((task) => task.status === column.id)}
            />
          ))}
        </DndContext>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setFormVisible(true)}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        + Add Task
      </button>

      {/* Task Creation Form */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
            <form onSubmit={handleTaskCreation}>
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Task Title"
                className="p-2 border rounded mb-2 w-full"
                required
              />
              <textarea
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
                placeholder="Task Description"
                className="p-2 border rounded mb-2 w-full"
                required
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Add Task
                </button>
                <button
                  type="button"
                  onClick={() => setFormVisible(false)}
                  className="bg-gray-300 text-black p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
