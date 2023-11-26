/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AspirantsService } from './aspirants.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Aspirants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AspirantsService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([AspirantsService], (service: AspirantsService) => {
    expect(service).toBeTruthy();
  }));
});
