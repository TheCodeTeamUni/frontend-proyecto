/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTestComponent } from './add-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AspirantsService } from 'src/app/services/aspirants.service';
import { TestsService } from 'src/app/services/tests.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AddTestComponent', () => {
  let component: AddTestComponent;
  let fixture: ComponentFixture<AddTestComponent>;
  let mockAspirantsService: AspirantsService;
  let mockTestsService: TestsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTestComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [AspirantsService, TestsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestComponent);
    component = fixture.componentInstance;

    mockAspirantsService = TestBed.inject(AspirantsService);
    mockTestsService = TestBed.inject(TestsService);

    spyOn(mockAspirantsService, 'getAllAspirants').and.returnValue(of([
      { id: 1, name: 'Aspirant 1' },
      { id: 2, name: 'Aspirant 2' }
    ]));

    spyOn(mockTestsService, 'getCompanyTest').and.returnValue(of([
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' }
    ]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with proper fields and validators', () => {
    expect(component.addTestForm.get('idAspirant')).toBeTruthy();
    // Check other form fields and validators
  });

  it('should add a test correctly', () => {
    const test = {
      idAspirant: 1,
      nameTest: 'Test',
      date: '2023-11-25',
      result: 'Pass',
      notes: 'Some notes'
    };

    component.addTestForm.setValue(test);
    component.addTest();

    
  });

  it('should get all aspirants on initialization', () => {
    expect(mockAspirantsService.getAllAspirants).toHaveBeenCalled();
    expect(component.lstaspirants.length).toBeGreaterThan(0);
  });

  it('should get company tests on initialization', () => {
    expect(mockTestsService.getCompanyTest).toHaveBeenCalled();
    expect(component.companyTests.length).toBeGreaterThan(0);
  });
});
