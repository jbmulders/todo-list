export interface ITodo {
  title: string;
  description: string;
  due?: number | string;
  createdBy: string;
  createOn: number;
  id: string;
}
