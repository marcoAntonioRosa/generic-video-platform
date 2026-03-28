import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoComponent } from "../video/video.component";
import { VideoDetailsComponent } from "../video-details/video-details.component";

@Component({
  selector: 'app-video-page',
  imports: [VideoComponent, VideoDetailsComponent],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.css',
})
export class VideoPageComponent implements OnInit {
  private route = inject(ActivatedRoute)

  protected videoId: string = '';

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.videoId = id ?? '';
  }
}
