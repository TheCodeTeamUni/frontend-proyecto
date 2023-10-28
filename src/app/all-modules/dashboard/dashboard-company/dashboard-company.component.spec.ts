/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { DashboardCompanyComponent } from './dashboard-company.component';
import { UsersService } from 'src/app/services/users.service';

describe('DashboardCompanyComponent', () => {
  let component: DashboardCompanyComponent;
  let fixture: ComponentFixture<DashboardCompanyComponent>;
  let mockRouter: any;
  let mockUserService: any;

  beforeEach(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    mockUserService = {
      getUser: jasmine.createSpy('getUser').and.returnValue(of({ username: 'testuser', type: '1' }))
    };

    TestBed.configureTestingModule({
      declarations: [DashboardCompanyComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: UsersService, useValue: mockUserService }
      ]
    });

    fixture = TestBed.createComponent(DashboardCompanyComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties', () => {
    component.ngOnInit();
    expect(component.token).toBeDefined();
    expect(component.username).toBe('testuser');
    expect(component.type).toBe('1');
    expect(component.profile).toBe('Aspirant');
  });

  it('should handle different user types', () => {
    mockUserService.getUser.and.returnValue(of({ username: 'testuser', type: '2' }));
    component.ngOnInit();
    expect(component.type).toBe('2');
    expect(component.profile).toBe('Company');
  });
});
