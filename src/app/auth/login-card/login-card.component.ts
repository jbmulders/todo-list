import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICredential } from '@model';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent {
  @Output() doLogin = new EventEmitter<ICredential>();

  submitLoginForm(ngForm: NgForm) {
    this.doLogin.emit({
      email: ngForm.form.get('email').value,
      password: ngForm.form.get('password').value,
    });

    ngForm.form.reset();
  }
}
