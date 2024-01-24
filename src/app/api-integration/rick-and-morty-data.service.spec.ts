import { TestBed } from '@angular/core/testing';

import { RickAndMortyDataService } from './rick-and-morty-data.service';

describe('RickAndMortyDataService', () => {
  let service: RickAndMortyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMortyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
