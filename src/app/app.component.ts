import { Component, OnInit } from '@angular/core';
import { RootFacade } from './store/root';
import { Observable } from 'rxjs';
import { IToastMessage } from './core/model/toast-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  toastMessage$: Observable<IToastMessage>;

  constructor(private rootFacade: RootFacade) {}

  ngOnInit() {
    this.toastMessage$ = this.rootFacade.toastMessage$;
  }
}
