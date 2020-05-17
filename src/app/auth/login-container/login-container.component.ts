import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@store';
import { ICredential, IToastMessage } from '@model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  user$: Observable<firebase.UserInfo>;
  loggingIn$: Observable<boolean>;

  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.user$ = this.authFacade.getCurrentUser$;
    this.loggingIn$ = this.authFacade.loggingIn$;
  }

  doLogin(event: ICredential) {
    this.authFacade.handleLogin(event);
  }
}
