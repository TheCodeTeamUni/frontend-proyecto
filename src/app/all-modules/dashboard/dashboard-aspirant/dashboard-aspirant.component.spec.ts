import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DashboardAspirantComponent } from './dashboard-aspirant.component';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardAspirantComponent', () => {
  let component: DashboardAspirantComponent;
  let fixture: ComponentFixture<DashboardAspirantComponent>;
  let router: Router;
  let userService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAspirantComponent],
      providers: [Router, UsersService],
      imports: [RouterTestingModule, HttpClientModule],
    });

    fixture = TestBed.createComponent(DashboardAspirantComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userService = TestBed.inject(UsersService);
  });

  it('should create the DashboardAspirantComponent', () => {
    expect(component).toBeTruthy();
  });



  it('should call getAspirant and set properties', () => {
    spyOn(userService, 'getUser').and.returnValue(of({ username: 'testuser', type: '1' }));

    component.ngOnInit();
    component.getAspirant();

    expect(userService.getUser).toHaveBeenCalled();
    expect(component.username).toBe('testuser');
    expect(component.type).toBe('1');
    expect(component.profile).toBe('Aspirant');
  });
});
