/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterviewsService } from './interviews.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Interviews', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterviewsService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([InterviewsService], (service: InterviewsService) => {
    expect(service).toBeTruthy();
  }));
});
