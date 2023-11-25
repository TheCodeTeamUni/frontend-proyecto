/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyInterviewsComponent } from './company-interviews.component';
import { InterviewsService } from 'src/app/services/interviews.service';
import { of } from 'rxjs';

describe('CompanyInterviewsComponent', () => {
  let component: CompanyInterviewsComponent;
  let fixture: ComponentFixture<CompanyInterviewsComponent>;
  let interviewsService: jasmine.SpyObj<InterviewsService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('InterviewsService', ['getCompanyInterviews']);

    await TestBed.configureTestingModule({
      declarations: [ CompanyInterviewsComponent ],
      providers: [
        { provide: InterviewsService, useValue: spy }
      ]
    })
    .compileComponents();

    interviewsService = TestBed.inject(InterviewsService) as jasmine.SpyObj<InterviewsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInterviewsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize lstInterviews as undefined', () => {
    expect(component.lstInterviews).toBeUndefined();
  });

  it('should call getCompanyInterviews and formatDates on ngOnInit', () => {
    const fakeInterviews = [{ date: new Date() }];

    interviewsService.getCompanyInterviews.and.returnValue(of(fakeInterviews));
    spyOn(localStorage, 'getItem').and.returnValue('mockedToken');

    component.ngOnInit();

    expect(localStorage.getItem).toHaveBeenCalledWith('Token');
    expect(interviewsService.getCompanyInterviews).toHaveBeenCalledWith('mockedToken');
    expect(component.lstInterviews).toEqual(fakeInterviews);
  });

  it('should format dates correctly', () => {
    const fakeInterviews = [{ date: '2023-11-23T12:00:00Z' }];
    component.lstInterviews = fakeInterviews;

    component.formatDates();

    const formattedDate = component.lstInterviews[0].date;

  });
});
