import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegisterTypeComponent } from './register-type.component';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/localStorage.service';

describe('RegisterTypeComponent', () => {
  let component: RegisterTypeComponent;
  let fixture: ComponentFixture<RegisterTypeComponent>;
  let router: Router;
  let localStorageService: LocalStorageService;

  beforeEach(waitForAsync(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', ['setItem']);

    TestBed.configureTestingModule({
      declarations: [RegisterTypeComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: LocalStorageService, useValue: localStorageServiceSpy },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    localStorageService = TestBed.inject(LocalStorageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('aspirantRegister() should call setItem on LocalStorageService and navigate to "/register"', () => {
    // Arrange

    // Act
    component.aspirantRegister();

    // Assert
    expect(localStorageService.setItem).toHaveBeenCalledWith('Type', '1');
    expect(router.navigate).toHaveBeenCalledWith(['/register']);
  });

  it('companyRegister() should call setItem on LocalStorageService and navigate to "/register"', () => {
    // Arrange

    // Act
    component.companyRegister();

    // Assert
    expect(localStorageService.setItem).toHaveBeenCalledWith('Type', '2');
    expect(router.navigate).toHaveBeenCalledWith(['/register']);
  });
});
