/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdService } from './Ad.service';

describe('Service: Ad', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdService]
    });
  });

  it('should ...', inject([AdService], (service: AdService) => {
    expect(service).toBeTruthy();
  }));
});
