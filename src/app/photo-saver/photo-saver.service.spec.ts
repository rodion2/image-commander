import { TestBed } from '@angular/core/testing';

import { PhotoCRUDService } from './photo-c-r-u-d.service';

describe('PhotoSaverService', () => {
  let service: PhotoCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
