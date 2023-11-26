/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterviewsService } from './interviews.service';
import { of } from 'rxjs';

describe('InterviewsService', () => {
  let service: InterviewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InterviewsService]
    });
    service = TestBed.inject(InterviewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an interview', () => {
    const mockToken = 'mock-token';
    const mockInterview = {}; // Your mock interview object

    service.addInterview(mockInterview, mockToken).subscribe(result => {
      expect(result).toBeDefined(); // Define your expectations based on the response
    });

    const req = httpMock.expectOne(`${service['backUrl']}abcjobs/company/interview`);
    expect(req.request.method).toBe('POST');
    req.flush({}); // Provide your mock response data here
  });

  it('should get company interviews', () => {
    const mockToken = 'mock-token';

    service.getCompanyInterviews(mockToken).subscribe(result => {
      expect(result).toBeDefined(); // Define your expectations based on the response
    });

    const req = httpMock.expectOne(`${service['backUrl']}abcjobs/company/interview`);
    expect(req.request.method).toBe('GET');
    req.flush({}); // Provide your mock response data here
  });

  // Add tests for other methods (getAspirantInterviews, getInterview, addResultInterview, getInterviewResult) similarly
});
