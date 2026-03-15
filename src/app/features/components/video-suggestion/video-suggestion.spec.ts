import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSuggestion } from './video-suggestion';

describe('VideoSuggestion', () => {
  let component: VideoSuggestion;
  let fixture: ComponentFixture<VideoSuggestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoSuggestion],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoSuggestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
