/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PerformanceService } from './performance.service';
import { of } from 'rxjs';

describe('PerformanceService', () => {
  let service: PerformanceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PerformanceService]
    });
    service = TestBed.inject(PerformanceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add performance', () => {
    const mockToken = 'mock-token';
    const mockAspirantId = '123';
    const mockPerformance = {}; // Your mock performance object

    service.addPerformance(mockPerformance, mockToken, mockAspirantId).subscribe(result => {
      expect(result).toBeDefined(); // Define your expectations based on the response
    });

    const req = httpMock.expectOne(`${service['backUrl']}abcjobs/performance/${mockAspirantId}`);
    expect(req.request.method).toBe('POST');
    req.flush({}); // Provide your mock response data here
  });

  it('should get performance', () => {
    const mockToken = 'mock-token';
    const mockAspirantId = '123';

    service.getPerformance(mockToken, mockAspirantId).subscribe(result => {
      expect(result).toBeDefined(); // Define your expectations based on the response
    });

    const req = httpMock.expectOne(`${service['backUrl']}abcjobs/performance/${mockAspirantId}`);
    expect(req.request.method).toBe('GET');
    req.flush({}); // Provide your mock response data here
  });
});
