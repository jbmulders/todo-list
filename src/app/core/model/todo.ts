export interface ITodo {
  title: string;
  description: string;
  due?: string;
  createdBy: string;
  createdOn: number;
  id: string;
  done: boolean;
  doneOn: number;
}
