/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PersonalInformationComponent } from './personal-information.component';
import { UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { AspirantInformationService } from 'src/app/services/aspirant-information.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;
  let formBuilder: UntypedFormBuilder;
  let router: Router;
  let toastr: ToastrService;
  let dataService: DataService;
  let aspirantInformation: AspirantInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInformationComponent],
      providers: [
        UntypedFormBuilder,
        Router,
        ToastrService,
        DataService,
        AspirantInformationService,
      ],
      imports: [ToastrModule.forRoot(), HttpClientModule]
    });

    fixture = TestBed.createComponent(PersonalInformationComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(UntypedFormBuilder);
    router = TestBed.inject(Router);
    toastr = TestBed.inject(ToastrService);
    dataService = TestBed.inject(DataService);
    aspirantInformation = TestBed.inject(AspirantInformationService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize personalInformationForm', () => {
    component.ngOnInit();
    expect(component.personalInformationForm).toBeDefined();
    expect(component.personalInformationForm instanceof FormGroup).toBeTrue();
  });

  it('should have the correct form controls with validators', () => {
    component.ngOnInit();
    const form = component.personalInformationForm;
    expect(form.get('name')).toBeTruthy();
    expect(form.get('lastName')).toBeTruthy();
    // Add assertions for other form controls and their validators.
  });

  it('should call addPersonalInformation method', () => {
    spyOn(component, 'addPersonalInformation');
    component.addPersonalInformation();
    expect(component.addPersonalInformation).toHaveBeenCalled();
  });

  // You can add more tests for other methods and components as needed.
});
