/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AspirantsService } from 'src/app/services/aspirants.service';
import { ProfileAspirantComponent } from './profile-aspirant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfileAspirantComponent', () => {
  let component: ProfileAspirantComponent;
  let fixture: ComponentFixture<ProfileAspirantComponent>;

  // Mock data for testing
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: jasmine.createSpy('get').and.returnValue('testUserId'),
      },
    },
  };

  const mockAspirantService = jasmine.createSpyObj('AspirantsService', ['getAspirant']);
  mockAspirantService.getAspirant.and.returnValue(of({
    personal_information: {
      name: 'John',
      lastName: 'Doe',
      typeDocument: 'ID',
      document: '12345',
      gender: 'Male',
      alterntiveEmail: 'john.doe@example.com',
      telephone: '123456789',
      country: 'USA',
      address: '123 Main St',
      birthdate: '1990-01-01',
      description: 'Lorem ipsum',
      photo: 'profile-photo.jpg',
    },
    education: [{ school: 'University A', degree: 'Bachelor' }],
    work_experience: [{ company: 'Company X', position: 'Developer' }],
    skill: [{ name: 'JavaScript', level: 70 }],
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileAspirantComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AspirantsService, useValue: mockAspirantService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAspirantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    expect(component.addAspirantProjectForm).toBeTruthy();
  });


});
