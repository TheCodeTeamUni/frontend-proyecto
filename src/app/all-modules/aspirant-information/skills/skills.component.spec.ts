import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { UntypedFormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { AspirantInformationService } from 'src/app/services/aspirant-information.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let formBuilder: UntypedFormBuilder;
  let dataService: DataService;
  let aspirantInformationService: AspirantInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsComponent],
      providers: [
        UntypedFormBuilder,
        DataService,
        AspirantInformationService,
      ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(UntypedFormBuilder);
    dataService = TestBed.inject(DataService);
    aspirantInformationService = TestBed.inject(AspirantInformationService);
  });

  it('should create the SkillsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the addSkillsForm', () => {
    component.ngOnInit();
    expect(component.addSkillsForm).toBeDefined();
  });



  it('should call getSkill', () => {
    spyOn(aspirantInformationService, 'getSkill').and.returnValue(of([]));

    component.ngOnInit();
    component.getSkill();

    expect(aspirantInformationService.getSkill).toHaveBeenCalled();
    expect(component.skills).toEqual([]);
  });

  it('should load skills', () => {
    component.loadSkills();
    expect(component.lstSkills).toEqual(dataService.skills);
  });

  it('should load years', () => {
    component.loadYears();
    expect(component.lstYears).toEqual(dataService.yearsOfExperience);
  });

  it('should handle slider change', () => {
    const event = { value: 75 };
    component.onSliderChange(event);
    expect(component.valorSeleccionado).toEqual(75);
  });
});
