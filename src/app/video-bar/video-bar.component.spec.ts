import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBarComponent } from './video-bar.component';

describe('VideoBarComponent', () => {
  let component: VideoBarComponent;
  let fixture: ComponentFixture<VideoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
