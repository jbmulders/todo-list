import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '@model';
import { TodoFacade } from '@store';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent implements OnInit {
  @ViewChild('todoDialog') todoDialog: EditTodoComponent;
  list$: Observable<ITodo[]>;
  isNew$: Observable<boolean>;
  selectedTodo$: Observable<ITodo>;
  loading$: Observable<boolean>;

  constructor(private todoFacade: TodoFacade, private http: HttpClient) {}

  ngOnInit(): void {
    this.list$ = this.todoFacade.todos$;
    this.isNew$ = this.todoFacade.isNew$;
    this.selectedTodo$ = this.todoFacade.selectedTodo$;
    this.loading$ = this.todoFacade.loading$;

    this.todoFacade.handleLoadTodos();
  }

  addTodoClicked() {
    this.todoFacade.handleSelectTodo();
    this.todoDialog.open();
  }

  saveTodo({ item }: { item: ITodo }) {
    this.todoFacade.handleSaveTodo(item);
  }

  selectTodo({ item }: { item: ITodo }) {
    this.todoFacade.handleSelectTodo(item);
    this.todoDialog.open();
  }
}
