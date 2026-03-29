import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { VideoComponent } from "../video/video.component";
import { VideoDetailsComponent } from "../video-details/video-details.component";
import { CommentSectionComponent } from '../comment-section/comment-section.component';

@Component({
  selector: 'app-video-page',
  imports: [VideoComponent, VideoDetailsComponent, CommentSectionComponent],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.css',
})
export class VideoPageComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private readonly title = inject(Title);

  protected videoId: string = '';

  protected videoTitle: string = '';

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.videoId = id ?? '';

    this.videoTitle = 'Some quick example text to build on the card title and make up the bulk of the card’s content.';
    this.title.setTitle(this.videoTitle);
  }
}
