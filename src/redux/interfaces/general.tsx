export type Task = {
  title: string;
  description: string;
};

export interface tasksInitialState {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}
