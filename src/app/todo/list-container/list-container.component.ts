import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '@model';
import { TodoFacade } from '@store';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent implements OnInit {
  list$: Observable<ITodo[]>;

  constructor(private todoFacade: TodoFacade) {}

  ngOnInit(): void {
    this.list$ = this.todoFacade.todos$;
  }

  addTodoClicked() {}
}
