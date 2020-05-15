import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  @Output() doLogout = new EventEmitter<void>();

  logoutClick() {
    this.doLogout.emit();
  }
}
