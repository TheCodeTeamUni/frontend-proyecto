/* tslint:disable:no-unused-variable */
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { UntypedFormBuilder } from '@angular/forms';
import { AspirantInformationService } from 'src/app/services/aspirant-information.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let formBuilder: UntypedFormBuilder;
  let aspirantInformationService: AspirantInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationComponent],
      providers: [UntypedFormBuilder, AspirantInformationService],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(UntypedFormBuilder);
    aspirantInformationService = TestBed.inject(AspirantInformationService);
  });

  it('should create the EducationComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the educationForm', () => {
    component.ngOnInit();
    expect(component.educationForm).toBeDefined();
  });

  it('should call getEducationInformation and set educations property', () => {
    spyOn(aspirantInformationService, 'getEducation').and.returnValue(
      of(['Education1', 'Education2'])
    );

    component.ngOnInit();
    component.getEducationInformation();

    expect(aspirantInformationService.getEducation).toHaveBeenCalled();
    expect(component.educations).toEqual(['Education1', 'Education2']);
  });

  it('should handle endDateChange', () => {
    component.endDateChange('Yes');
    expect(component.showEndDate).toBe(true);

    component.endDateChange('No');
    expect(component.showEndDate).toBe(false);
  });
});
