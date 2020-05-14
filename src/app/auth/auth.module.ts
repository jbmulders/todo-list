import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';
import { LoginContainerComponent } from './login-container/login-container.component';
import { StoreModule } from '@ngrx/store';
import { authStoreName, authReducer } from '@store';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [AuthComponent, LoginContainerComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature(authStoreName, authReducer),
  ],
})
export class AuthModule {}
