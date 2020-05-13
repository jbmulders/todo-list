import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';
import { LoginContainerComponent } from './login-container/login-container.component';
import { StoreModule } from '@ngrx/store';
import { authStoreName } from '@store';

@NgModule({
  declarations: [AuthComponent, LoginContainerComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    StoreModule.forFeature(authStoreName, {}),
  ],
})
export class AuthModule {}
