import { TestBed, inject } from '@angular/core/testing';

import { OverviewGuardService } from './overview-guard.service';

describe('OverviewGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverviewGuardService]
    });
  });

  it('should be created', inject([OverviewGuardService], (service: OverviewGuardService) => {
    expect(service).toBeTruthy();
  }));
});
