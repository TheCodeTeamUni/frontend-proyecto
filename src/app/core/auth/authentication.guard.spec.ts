import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthenticationGuard],
    });
    guard = TestBed.inject(AuthenticationGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true when Token is in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('SomeTokenValue');
    const canActivate = guard.canActivate();
    expect(canActivate).toBe(true);
  });

  it('should navigate to login and return false when Token is not in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const navigateSpy = spyOn(router, 'navigate');
    const canActivate = guard.canActivate();
    expect(canActivate).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
