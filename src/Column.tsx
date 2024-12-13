import { useDroppable } from '@dnd-kit/core';
import { TaskCard } from './TaskCard';
import { Column as ColumnType, Task } from './types';

type ColumnProps = {
  column: ColumnType;
  tasks: Task[];
};

export function Column({ column, tasks }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col items-center bg-white shadow-lg rounded-lg w-full sm:w-80 p-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{column.title}</h2>
      <div className="flex flex-col gap-4 w-full">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
