import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterVideoComponent } from './center-video.component';

describe('CenterVideoComponent', () => {
  let component: CenterVideoComponent;
  let fixture: ComponentFixture<CenterVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
