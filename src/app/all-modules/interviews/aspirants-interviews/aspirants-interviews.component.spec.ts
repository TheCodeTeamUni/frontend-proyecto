/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AspirantsInterviewsComponent } from './aspirants-interviews.component';
import { InterviewsService } from 'src/app/services/interviews.service';
import { of } from 'rxjs';

describe('AspirantsInterviewsComponent', () => {
  let component: AspirantsInterviewsComponent;
  let fixture: ComponentFixture<AspirantsInterviewsComponent>;
  let interviewsServiceSpy: jasmine.SpyObj<InterviewsService>;

  beforeEach(async () => {
    const interviewsService = jasmine.createSpyObj('InterviewsService', ['getAspirantInterviews']);
    await TestBed.configureTestingModule({
      declarations: [ AspirantsInterviewsComponent ],
      providers: [
        { provide: InterviewsService, useValue: interviewsService }
      ]
    })
    .compileComponents();

    interviewsServiceSpy = TestBed.inject(InterviewsService) as jasmine.SpyObj<InterviewsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirantsInterviewsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize lstInterviews as an empty array', () => {
    expect(component.lstInterviews).toEqual([]);
  });

  it('should call getAspirantInterviews on ngOnInit', () => {
    spyOn(localStorage, 'getItem').and.returnValue('mockedToken');

    const fakeInterviews = [{ date: new Date() }];
    interviewsServiceSpy.getAspirantInterviews.and.returnValue(of(fakeInterviews));

    component.ngOnInit();

    expect(localStorage.getItem).toHaveBeenCalledWith('Token');
    expect(interviewsServiceSpy.getAspirantInterviews).toHaveBeenCalledWith('mockedToken');
    expect(component.lstInterviews).toEqual(fakeInterviews);
    // Verifica si se llamó a la función formatDates después de recibir los datos
  });

  it('should format dates correctly', () => {
    const fakeInterviews = [{ date: '2023-11-23T12:00:00Z' }];
    component.lstInterviews = fakeInterviews;

    component.formatDates();

    const formattedDate = component.lstInterviews[0].date;

  });

});
