import { TestBed } from '@angular/core/testing';

import { ModuleMdTwilioVideoService } from './module-md-twilio-video.service';

describe('ModuleMdTwilioVideoService', () => {
  let service: ModuleMdTwilioVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleMdTwilioVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
