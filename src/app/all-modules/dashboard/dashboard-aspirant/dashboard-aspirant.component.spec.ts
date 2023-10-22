import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { DashboardAspirantComponent } from './dashboard-aspirant.component';
import { UsersService } from 'src/app/services/users.service';

describe('DashboardAspirantComponent', () => {
  let component: DashboardAspirantComponent;
  let fixture: ComponentFixture<DashboardAspirantComponent>;
  let router: Router;
  let userService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAspirantComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
        {
          provide: UsersService,
          useValue: {
            getUser: () => of({ username: 'TestUser', type: '1' }),
          },
        },
      ],
    });

    fixture = TestBed.createComponent(DashboardAspirantComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userService = TestBed.inject(UsersService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve user information from the service on ngOnInit', () => {
    spyOn(localStorage, 'getItem').and.returnValue('TestToken');
    component.ngOnInit();
    expect(component.token).toEqual('TestToken');
    expect(component.username).toEqual('TestUser');
    expect(component.type).toEqual('1');
    expect(component.profile).toEqual('Aspirant');
  });

  it('should navigate to "/login" on error', () => {
    spyOn(localStorage, 'getItem').and.returnValue('TestToken');
    spyOn(userService, 'getUser').and.returnValue(throwError('Test error')); // Simulate an error
    component.ngOnInit();
  });
});
