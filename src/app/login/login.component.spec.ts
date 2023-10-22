import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { UntypedFormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: jasmine.SpyObj<LoginService>;
  let toastrService: ToastrService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    toastrService = TestBed.inject(ToastrService);
    router = TestBed.inject(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form', () => {
    expect(component.form.valid).toBeFalsy(); // El formulario debe estar inicialmente inválido
  });

  it('should show success toast and navigate for valid login', () => {
    // Arrange
    const fakeResponse = { token: 'fakeToken', type: '1' };
    loginService.login.and.returnValue(of(fakeResponse));

    // Act
    component.form.setValue({ email: 'test@example.com', password: 'password' });
    component.submit();

    // Assert
    expect(loginService.login).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
    expect(toastrService.success).toHaveBeenCalledWith('Welcome to ABC Jobs', 'Login Success');
    expect(router.navigate).toHaveBeenCalledWith(['/layout/dashboard/dashboard-aspirant']);
    expect(localStorage.getItem('Token')).toBe(fakeResponse.token);
  });

  it('should show error toast for invalid login', () => {
    // Arrange
    const fakeResponse = { token: undefined };
    loginService.login.and.returnValue(of(fakeResponse));

    // Act
    component.form.setValue({ email: 'test@example.com', password: 'wrongpassword' });
    component.submit();

    // Assert
    expect(loginService.login).toHaveBeenCalledWith({ email: 'test@example.com', password: 'wrongpassword' });
    expect(toastrService.error).toHaveBeenCalledWith('Email or password incorrect', 'Failed to login');
  });

  it('should show error toast for login error', () => {
    // Arrange
    loginService.login.and.returnValue(throwError('Error occurred'));

    // Act
    component.form.setValue({ email: 'test@example.com', password: 'password' });
    component.submit();

    // Assert
    expect(loginService.login).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
    expect(toastrService.error).toHaveBeenCalledWith('Email or password incorrect', 'Failed to login');
  });
});
