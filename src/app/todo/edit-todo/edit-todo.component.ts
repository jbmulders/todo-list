import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '@model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  @Input() todo: ITodo;
  @Input() isNewTodo: boolean;
  @Output() saveClick = new EventEmitter<{ item: ITodo }>();

  show: boolean;

  ngOnInit(): void {
    this.show = false;
  }
  saveButtonClicked() {
    this.saveClick.emit({ item: this.todo });
  }
  open() {
    this.show = true;
  }
  close() {
    this.show = false;
  }
}
