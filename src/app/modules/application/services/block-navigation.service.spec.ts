import { TestBed } from '@angular/core/testing';

import { BlockNavigationService } from './block-navigation.service';

describe('BlockNavigationService', () => {
  let service: BlockNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
