export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'PEER_REVIEW' | 'DONE';

export type Task = {
  id: string;
  status: TaskStatus;
  title: string;
  description: string;
};

export type Column = {
  id: TaskStatus;
  title: string;
};
