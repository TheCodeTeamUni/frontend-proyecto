/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { AspirantInformationService } from 'src/app/services/aspirant-information.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let aspirantInformationService: AspirantInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [AspirantInformationService],
      imports: [HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    aspirantInformationService = TestBed.inject(AspirantInformationService);
  });

  it('should create the ProfileComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPersonalInfo and set properties', () => {
    spyOn(aspirantInformationService, 'getPersonalInfo').and.returnValue(
      of({
        photo: 'test.jpg',
        birthdate: '01/01/2000',
        address: '123 Main St',
        alterntiveEmail: 'test@example.com',
        country: 'USA',
        description: 'Some description',
        document: '12345',
        gender: 'Male',
        lastName: 'Doe',
        name: 'John',
        telephone: '123456789',
        typeDocument: 'ID',
      })
    );

    component.ngOnInit();
    component.getPersonalInfo();

    expect(aspirantInformationService.getPersonalInfo).toHaveBeenCalled();
    expect(component.photo).toBe('test.jpg');
    expect(component.birthdate).toBe('01/01/2000');
    expect(component.address).toBe('123 Main St');
    expect(component.alterntiveEmail).toBe('test@example.com');
    expect(component.country).toBe('USA');
    expect(component.description).toBe('Some description');
    expect(component.document).toBe('12345');
    expect(component.gender).toBe('Male');
    expect(component.lastName).toBe('Doe');
    expect(component.name).toBe('John');
    expect(component.telephone).toBe('123456789');
    expect(component.typeDocument).toBe('ID');
  });

  it('should call getSkill and set skills property', () => {
    spyOn(aspirantInformationService, 'getSkill').and.returnValue(
      of(['Skill1', 'Skill2'])
    );

    component.ngOnInit();
    component.getSkill();

    expect(aspirantInformationService.getSkill).toHaveBeenCalled();
    expect(component.skills).toEqual(['Skill1', 'Skill2']);
  });

  it('should call imagenNoEncontrada and set photo property', () => {
    component.imagenNoEncontrada();

    expect(component.photo).toBe(component.imagenPorDefectoUrl);
  });
});
