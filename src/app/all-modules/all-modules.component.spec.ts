import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AllModulesComponent } from './all-modules.component';
import { UsersService } from '../services/users.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AllModulesComponent', () => {
  let component: AllModulesComponent;
  let fixture: ComponentFixture<AllModulesComponent>;
  let userService: UsersService;
  let getUserSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllModulesComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [UsersService],
    });

    fixture = TestBed.createComponent(AllModulesComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    getUserSpy = spyOn(userService, 'getUser');
  });

  afterEach(() => {
    getUserSpy.calls.reset(); // Restablecer el espía después de cada prueba
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize navControllerAspirant and navControllerCompany to false', () => {
    expect(component.navControllerAspirant).toBe(false);
    expect(component.navControllerCompany).toBe(false);
  });

  it('should call getUser on ngOnInit', () => {
    const token = 'test-token';
    getUserSpy.and.returnValue(of({ type: '1' }));
    spyOn(localStorage, 'getItem').and.returnValue(token);

    component.ngOnInit();

    expect(component.token).toBe(token);
    expect(getUserSpy).toHaveBeenCalled();
  });

  it('should update navControllerAspirant and navControllerCompany based on user type', () => {
    getUserSpy.and.returnValue(of({ type: '1' }));

    component.ngOnInit();

    expect(component.navControllerAspirant).toBe(true);
    expect(component.navControllerCompany).toBe(false);

    getUserSpy.and.returnValue(of({ type: '2' }));

    component.ngOnInit();

    expect(component.navControllerAspirant).toBe(false);
    expect(component.navControllerCompany).toBe(true);
  });
});
