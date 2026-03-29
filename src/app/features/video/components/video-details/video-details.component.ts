import { Component, Input } from '@angular/core';
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
export class VideoDetailsComponent {
  @Input() videoId: string = '';
  @Input() amountSubscribers: number = 3.7;
  protected unitMeasurement: string = 'M';
}
