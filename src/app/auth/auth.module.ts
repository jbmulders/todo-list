import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';
import { LoginContainerComponent } from './login-container/login-container.component';
import { StoreModule } from '@ngrx/store';
import { authStoreName, authReducer, AuthFacade, AuthEffects } from '@store';
import { SharedModule } from 'app/shared/shared.module';
import { AuthService } from './auth-service/auth.service';
import { LoginCardComponent } from './login-card/login-card.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AuthComponent, LoginContainerComponent, LoginCardComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature(authStoreName, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthService, AuthFacade],
})
export class AuthModule {}
