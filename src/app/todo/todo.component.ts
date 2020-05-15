import { Component } from '@angular/core';
import { RootFacade } from '@store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(private rootFacade: RootFacade) {}

  doLogout() {
    this.rootFacade.handleLogout();
  }
}
