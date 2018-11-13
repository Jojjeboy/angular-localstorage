import { TestBed } from '@angular/core/testing';

import { AngularNgLocalstorageService } from './angular-ng-localstorage.service';

describe('AngularNgLocalstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularNgLocalstorageService = TestBed.get(AngularNgLocalstorageService);
    expect(service).toBeTruthy();
  });
});
