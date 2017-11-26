import { TestBed, inject } from '@angular/core/testing';

import { ChangeThemeService } from './change-theme.service';

describe('ChangeThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeThemeService]
    });
  });

  it('should ...', inject([ChangeThemeService], (service: ChangeThemeService) => {
    expect(service).toBeTruthy();
  }));
});
