/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AspirantInformationService } from './aspirant-information.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('AspirantInformationService', () => {
  let service: AspirantInformationService;
  let httpTestingController: HttpTestingController;
  const baseUrl = environment.baseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AspirantInformationService],
    });
    service = TestBed.inject(AspirantInformationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request with the correct URL and headers', () => {
    const token = 'yourAuthToken'; // Provide a valid token
    const info = {
      /* Provide your test data here */
    };

    service.addPersonalInfo(info, token).subscribe();

    const req = httpTestingController.expectOne(
      `${baseUrl}abcjobs/aspirantes/personal`
    );

    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${token}`);

    req.flush({
      /* Provide your mock response data here */
    });
  });

  // You can add more tests for error handling and other scenarios as needed.
});
