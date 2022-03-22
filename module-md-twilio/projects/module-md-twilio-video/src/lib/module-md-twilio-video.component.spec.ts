import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleMdTwilioVideoComponent } from './module-md-twilio-video.component';

describe('ModuleMdTwilioVideoComponent', () => {
  let component: ModuleMdTwilioVideoComponent;
  let fixture: ComponentFixture<ModuleMdTwilioVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleMdTwilioVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleMdTwilioVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
