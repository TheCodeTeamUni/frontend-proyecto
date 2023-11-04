/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { PersonalInformationComponent } from './personal-information.component';
import { UntypedFormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { AspirantInformationService } from 'src/app/services/aspirant-information.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;
  let formBuilder: UntypedFormBuilder;
  let dataService: DataService;
  let aspirantInformationService: AspirantInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInformationComponent],
      providers: [
        UntypedFormBuilder,
        DataService,
        AspirantInformationService,
      ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(PersonalInformationComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(UntypedFormBuilder);
    dataService = TestBed.inject(DataService);
    aspirantInformationService = TestBed.inject(AspirantInformationService);
  });

  it('should create the PersonalInformationComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the personalInformationForm', () => {
    component.ngOnInit();
    expect(component.personalInformationForm).toBeDefined();
  });


  it('should load countries', () => {
    component.loadCountries();
    expect(component.lstCountries).toEqual(dataService.countries);
  });
});
