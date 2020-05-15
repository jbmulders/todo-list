import { Component } from '@angular/core';
import { RootFacade } from './store/root';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private rootFacade: RootFacade) {}
}
