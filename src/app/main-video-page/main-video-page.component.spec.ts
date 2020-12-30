import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVideoPageComponent } from './main-video-page.component';

describe('MainVideoPageComponent', () => {
  let component: MainVideoPageComponent;
  let fixture: ComponentFixture<MainVideoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVideoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
