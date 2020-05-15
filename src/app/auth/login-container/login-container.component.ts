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
  loginError$: Observable<IToastMessage>;
  user$: Observable<firebase.UserInfo>;

  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.loginError$ = this.authFacade.loginError$;
    this.user$ = this.authFacade.getCurrentUser$;
  }

  doLogin(event: ICredential) {
    this.authFacade.handleLogin(event);
  }
}
