import { Component, inject, signal } from '@angular/core';

import { VideoSuggestion } from '../../components/video-suggestion/video-suggestion';
import { VideoService } from '../../services/video';

@Component({
  selector: 'app-home',
  imports: [VideoSuggestion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private videoService = inject(VideoService);
  videos = signal<any[]>([]);

  ngOnInit() {
    this.videoService.getSuggestions().subscribe(data => {
      this.videos.set(data);
    })
  }
}
