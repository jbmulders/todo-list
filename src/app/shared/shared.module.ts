import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [ToastComponent, LogoutComponent],
  imports: [CommonModule],
  exports: [ToastComponent, LogoutComponent],
})
export class SharedModule {}
