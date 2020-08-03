import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICredential } from '@model';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent {
  @Output() doLogin = new EventEmitter<ICredential>();

  constructor(private afAuth: AngularFireAuth) {}

  submitLoginForm(ngForm: NgForm) {
    this.doLogin.emit({
      email: ngForm.form.get('email').value,
      password: ngForm.form.get('password').value,
    });

    ngForm.form.reset();
  }

  async doGoogleLoginClick() {
    const provider = new auth.GoogleAuthProvider();
    const resp = await this.afAuth.signInWithPopup(provider);
  }
}
