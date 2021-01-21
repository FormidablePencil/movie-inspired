import { TestBed } from '@angular/core/testing';

import { NavigationMethodsService } from './navigation-methods.service';

describe('NavigationMethodsService', () => {
  let service: NavigationMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
