import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrModule, ToastrService } from "ngx-toastr";

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let formBuilder: UntypedFormBuilder;
  let router: Router;
  let toastr: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsComponent],
      providers: [UntypedFormBuilder, Router, ToastrService],
      imports: [ToastrModule.forRoot()]
    });

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(UntypedFormBuilder);
    router = TestBed.inject(Router);
    toastr = TestBed.inject(ToastrService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize addSkillsForm', () => {
    component.ngOnInit();
    expect(component.addSkillsForm).toBeTruthy();
  });

  it('should have the correct form controls', () => {
    component.ngOnInit();
    expect(component.addSkillsForm.get('FirstName')).toBeTruthy();
    expect(component.addSkillsForm.get('dob')).toBeTruthy();
    expect(component.addSkillsForm.get('rollNo')).toBeTruthy();
    expect(component.addSkillsForm.get('emailAddress')).toBeTruthy();
  });

  it('should have required validation on form controls', () => {
    component.ngOnInit();
    const form = component.addSkillsForm;
    expect(form.get('FirstName')?.hasValidator(Validators.required)).toBeTruthy();
    expect(form.get('dob')?.hasValidator(Validators.required)).toBeTruthy();
    expect(form.get('rollNo')?.hasValidator(Validators.required)).toBeTruthy();
    expect(form.get('emailAddress')?.hasValidator(Validators.required)).toBeTruthy();
  });

  it('should call addSkill method', () => {
    spyOn(component, 'addSkill');
    component.addSkill();
    expect(component.addSkill).toHaveBeenCalled();
  });
});
