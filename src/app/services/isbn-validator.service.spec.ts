import { TestBed } from '@angular/core/testing';

import { IsbnValidatorService } from './isbn-validator.service';

describe('IsbnValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsbnValidatorService = TestBed.get(IsbnValidatorService);
    expect(service).toBeTruthy();
  });

  it('should return true for valid isbn numbers', () => {
    const service: IsbnValidatorService = TestBed.get(IsbnValidatorService);
    expect(service.isIsbnValid('9780470059029')).toBeTruthy();
    expect(service.isIsbnValid('978 0 471 48648 0')).toBeTruthy();
    expect(service.isIsbnValid('978-0596809485')).toBeTruthy();
    expect(service.isIsbnValid('978-0-13-149505-0')).toBeTruthy();
    expect(service.isIsbnValid('978-0-262-13472-9')).toBeTruthy();
    expect(service.isIsbnValid('978-0-596-52068-7')).toBeTruthy();
  });

  it('should return false for invalid isbn numbers', () => {
    const service: IsbnValidatorService = TestBed.get(IsbnValidatorService);
    expect(service.isIsbnValid('1234567890123')).toBeFalsy();
    expect(service.isIsbnValid('978 0 471 48648 1')).toBeFalsy();
    expect(service.isIsbnValid('939-0596809485')).toBeFalsy();
    expect(service.isIsbnValid('978-0-13-149505-5')).toBeFalsy();
    expect(service.isIsbnValid('978-0-262')).toBeFalsy();
  })
});
