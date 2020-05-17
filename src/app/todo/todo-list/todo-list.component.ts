import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ITodo } from '@model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Output() addClick = new EventEmitter<void>();
  @Output() todoSelect = new EventEmitter<{ item: ITodo }>();
  @Input() todos: ITodo[];

  addButtonClicked() {
    this.addClick.emit();
  }
  rowClicked(item: ITodo) {
    this.todoSelect.emit({ item });
  }
}
