/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('Service: Users', () => {
  let service: UsersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        {
          provide: HttpClient,
          useClass: HttpClientMock,
        },
      ],
    });

    service = TestBed.get(UsersService);
  });

  it('should ...', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
