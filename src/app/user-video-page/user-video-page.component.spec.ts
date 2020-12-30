import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVideoPageComponent } from './user-video-page.component';

describe('UserVideoPageComponent', () => {
  let component: UserVideoPageComponent;
  let fixture: ComponentFixture<UserVideoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVideoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
