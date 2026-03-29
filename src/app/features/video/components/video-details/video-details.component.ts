import { Component, Input, OnInit } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapHandThumbsUp, bootstrapHandThumbsDown, bootstrapShare, bootstrapBookmarkPlus } from '@ng-icons/bootstrap-icons';
import { DescriptionComponent } from './description/description.component';

@Component({
  selector: 'app-video-details',
  imports: [NgIconComponent, DescriptionComponent],
  providers: [provideIcons({ bootstrapHandThumbsUp, bootstrapHandThumbsDown, bootstrapShare, bootstrapBookmarkPlus })],
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.css',
})
export class VideoDetailsComponent implements OnInit {
  @Input() videoId: string = '';

  protected channelName: string = '';
  protected subscriberAmount: string = '';
  protected likes: string = '';
  protected dislikes: string = '';
  protected views: string = '';
  protected uploadDate: string = ''

  ngOnInit() {
    this.channelName = 'Channel name';
    this.subscriberAmount = '1M'
    this.likes = '10K'
    this.dislikes = '0'
    this.views = '300K'
    this.uploadDate = '1 week ago';
  }
}
