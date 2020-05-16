import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '@model';
import { TodoFacade } from '@store';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent implements OnInit {
  @ViewChild('todoDialog') todoDialog: EditTodoComponent;
  list$: Observable<ITodo[]>;
  newTodo$: Observable<ITodo>;

  constructor(private todoFacade: TodoFacade) {}

  ngOnInit(): void {
    this.list$ = this.todoFacade.todos$;
    this.newTodo$ = this.todoFacade.initNewTodo();
  }

  addTodoClicked() {
    this.newTodo$ = this.todoFacade.initNewTodo();
    this.todoDialog.open();
  }

  saveTodo({ item }: { item: ITodo }) {
    this.todoFacade.handleSaveTodo(item);
  }
}
