import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './localStorage.service';


describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set an item in localStorage', () => {
    const key = 'testKey';
    const value = 'testValue';
    service.setItem(key, value);
    expect(localStorage.getItem(key)).toEqual(value);
  });

  it('should get an item from localStorage', () => {
    const key = 'testKey';
    const value = 'testValue';
    localStorage.setItem(key, value);
    const result = service.getItem(key);
    expect(result).toEqual(value);
  });

  it('should return null for a non-existing item', () => {
    const key = 'nonExistingKey';
    const result = service.getItem(key);
    expect(result).toBeNull();
  });
});
