import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { Register } from '../models/register';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: Router;
  let registerService: jasmine.SpyObj<RegisterService>;
  let toastrService: jasmine.SpyObj<ToastrService>;

  beforeEach(waitForAsync(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const registerServiceSpy = jasmine.createSpyObj('RegisterService', ['register']);
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);

    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: RegisterService, useValue: registerServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    registerService = TestBed.inject(RegisterService) as jasmine.SpyObj<RegisterService>;
    toastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit() should handle registration and navigation', () => {
    // Arrange
    const formData = {
      username: 'testUser',
      email: 'test@example.com',
      password: 'password',
      confirmPassword: 'password',
    };


    const successfulResponse: any ={
      id: 1,
      createdAt: "2023-10-14T15:47:05"
    };


    component.form.setValue(formData);
    registerService.register.and.returnValue(of(successfulResponse));

    // Act
    component.submit();

    // Assert
    expect(localStorage.getItem('Type')).toBeNull();
  });

  it('submit() should handle password mismatch', () => {
    // Arrange
    const formData = {
      username: 'testUser',
      email: 'test@example.com',
      password: 'password1',
      confirmPassword: 'password2', // Mismatch
    };
    component.form.setValue(formData);

    // Act
    component.submit();

    // Assert
    expect(toastrService.error).toHaveBeenCalledWith('Passwords do not match', 'Registration error');
    expect(registerService.register).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('submit() should handle short password', () => {
    // Arrange
    const formData = {
      username: 'testUser',
      email: 'test@example.com',
      password: 'short', // Password too short
      confirmPassword: 'short', // Password too short
    };
    component.form.setValue(formData);

    // Act
    component.submit();

    // Assert
    expect(toastrService.error).toHaveBeenCalledWith('password too short', 'Registration error');
    expect(registerService.register).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('iconLogle() should toggle Toggledata', () => {
    // Arrange
    const initialToggleData = component.Toggledata;

    // Act
    component.iconLogle();

    // Assert
    expect(component.Toggledata).toBe(!initialToggleData);
  });
});
