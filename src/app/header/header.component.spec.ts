import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { HeaderComponent } from './header.component';
import { UsersService } from '../services/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let userService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
        UsersService,
      ],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userService = TestBed.inject(UsersService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "/login" on Logout', () => {
    component.Logout();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  

  it('should retrieve user information from the service on ngOnInit', () => {
    spyOn(localStorage, 'getItem').and.returnValue('TestToken');
    spyOn(userService, 'getUser').and.returnValue(of({ username: 'TestUser', type: '1' }));
    component.ngOnInit();
    expect(component.token).toEqual('TestToken');
    expect(component.username).toEqual('TestUser');
    expect(component.type).toEqual('1');
    expect(component.profile).toEqual('Aspirant');
  });
});
