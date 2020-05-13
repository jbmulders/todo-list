import { ITodo } from '@model';

export interface ITodoState {
  list: ITodo[];
  selected: ITodo;
}
