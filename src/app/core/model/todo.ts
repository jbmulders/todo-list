export interface ITodo {
  title: string;
  description: string;
  due?: number;
  createdBy: string;
  createdOn: number;
  id: string;
  done: boolean;
  doneOn: number;
}
