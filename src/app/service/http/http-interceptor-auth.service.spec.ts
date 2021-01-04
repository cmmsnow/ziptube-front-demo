import { TestBed } from '@angular/core/testing';

import { HttpInterceptorAuthService } from './http-interceptor-auth.service';

describe('HttpInteceptorAuthService', () => {
  let service: HttpInterceptorAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
