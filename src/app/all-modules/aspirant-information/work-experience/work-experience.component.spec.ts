/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperienceComponent } from './work-experience.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExperienceComponent],
      imports: [ToastrModule.forRoot(), HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with the expected controls', () => {
    component.ngOnInit();
    const formControls = component.workInformationForm.controls;
    expect(formControls['company']).toBeDefined();
    expect(formControls['position']).toBeDefined();
    expect(formControls['actualJob']).toBeDefined();
    expect(formControls['startDate']).toBeDefined();
    expect(formControls['endDate']).toBeDefined();
  });

  it('should set showEndDate to false when actualJob is "Yes"', () => {
    component.endDateChange('Yes');
    expect(component.showEndDate).toBe(false);
  });

  it('should set showEndDate to true when actualJob is "No"', () => {
    component.endDateChange('No');
    expect(component.showEndDate).toBe(true);
  });

  it('should create a workInformation object with the correct values', () => {
    component.ngOnInit();
    const form = component.workInformationForm;
    form.controls['company'].setValue('Company ABC');
    form.controls['position'].setValue('Position XYZ');
    form.controls['actualJob'].setValue('Si');

    // La fecha de inicio y fin deben estar en el formato correcto para la conversión.
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-12-31');

    form.controls['startDate'].setValue(startDate);
    form.controls['endDate'].setValue(endDate);

    component.addWorkInformation();

    // Las fechas se convierten al formato esperado en el componente.
    const formattedStartDate = component.pipe.transform(startDate, 'd/MM/y');
    const formattedEndDate = component.pipe.transform(endDate, 'd/MM/y');

    const workInfo = {
      company: 'Company ABC',
      position: 'Position XYZ',
      actualJob: true,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    };


  });

});
