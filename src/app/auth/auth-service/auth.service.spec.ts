import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

class AnglarFireAuthMock {}

describe('AuthServiceService', () => {
  let service: AuthService;
  let fbAuth: AngularFireAuth;

  beforeEach(() => {
    fbAuth = new AnglarFireAuthMock() as AngularFireAuth;
    service = new AuthService(fbAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
