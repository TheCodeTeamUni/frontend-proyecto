/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectsService } from './projects.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Projects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([ProjectsService], (service: ProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
