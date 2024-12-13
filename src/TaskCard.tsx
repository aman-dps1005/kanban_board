import { useDraggable } from '@dnd-kit/core';
import { Task } from './types';

type TaskCardProps = {
  task: Task;
};

export function TaskCard({ task }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab bg-white rounded-lg shadow-md hover:shadow-lg p-4"
      style={style}
    >
      <h3 className="font-semibold text-gray-800">{task.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{task.description}</p>
    </div>
  );
}
