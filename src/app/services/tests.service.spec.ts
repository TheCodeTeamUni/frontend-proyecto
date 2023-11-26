/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestsService } from './tests.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestsService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([TestsService], (service: TestsService) => {
    expect(service).toBeTruthy();
  }));
});
