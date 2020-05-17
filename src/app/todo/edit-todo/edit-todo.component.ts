import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ITodo } from '@model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  @ViewChild('todoForm') todoForm: ElementRef;
  @Input() set todo(value: ITodo) {
    this.todoItem = { ...value };
  }
  @Input() isNewTodo: boolean;
  @Output() saveClick = new EventEmitter<{ item: ITodo }>();

  todoItem: ITodo;
  show: boolean;

  ngOnInit(): void {
    this.show = false;
  }
  open() {
    this.show = true;
  }
  private close() {
    this.show = false;
  }
  cancelClicked(event) {
    // nasty hack to stop the form from closing after hitting 'enter' key
    if (event.clientX > 0 && event.clientY > 0) {
      this.close();
    }
  }
  submitTodoForm(form: NgForm) {
    // TODO: properly bind to the form...
    if (form.valid) {
      this.saveClick.emit({ item: this.todoItem });
      this.close();
    }
  }
}
