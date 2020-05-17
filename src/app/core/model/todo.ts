export interface ITodo {
  title: string;
  description: string;
  due?: number;
  createdBy: string;
  createOn: number;
  id: string;
  done: boolean;
  doneOn: number;
}
