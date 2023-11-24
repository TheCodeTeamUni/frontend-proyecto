/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PerformanceService } from './performance.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Service: Performance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerformanceService],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
  });

  it('should ...', inject([PerformanceService], (service: PerformanceService) => {
    expect(service).toBeTruthy();
  }));
});
