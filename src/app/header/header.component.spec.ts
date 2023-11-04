import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../services/users.service';
import { AspirantInformationService } from '../services/aspirant-information.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let userService: UsersService;
  let aspirantInformation: AspirantInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [UsersService, AspirantInformationService],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    aspirantInformation = TestBed.inject(AspirantInformationService);
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUser and getPersonalInfo on ngOnInit', () => {
    spyOn(userService, 'getUser').and.returnValue(of({ username: 'testUser', type: '1' }));
    spyOn(aspirantInformation, 'getPersonalInfo').and.returnValue(of({ photo: 'test.jpg', lastName: 'Doe', name: 'John' }));

    component.ngOnInit();

    expect(component.username).toBe('testUser');
    expect(component.type).toBe('1');
    expect(component.profile).toBe('Aspirant');
    expect(component.photo).toBe('test.jpg');
    expect(component.lastName).toBe('Doe');
    expect(component.name).toBe('John');
  });

  it('should call Logout and navigate to /login', () => {
    spyOn(component.router, 'navigate');
    component.Logout();
    expect(localStorage.getItem('Token')).toBeNull();
    expect(localStorage.getItem('Type')).toBeNull();
    expect(component.router.navigate).toHaveBeenCalledWith(['/login']);
  });



  it('should set photo to imagenPorDefectoUrl in imagenNoEncontrada', () => {
    component.imagenNoEncontrada();
    expect(component.photo).toBe(component.imagenPorDefectoUrl);
  });
});
