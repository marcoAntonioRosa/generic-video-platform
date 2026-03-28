import { Component, Input } from '@angular/core';
import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
  NgbDropdownButtonItem
} from '@ng-bootstrap/ng-bootstrap/dropdown';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapHandThumbsUp, bootstrapHandThumbsDown, bootstrapShare, bootstrapBookmarkPlus } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-video-details',
  imports: [NgIconComponent, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem],
  providers: [provideIcons({ bootstrapHandThumbsUp, bootstrapHandThumbsDown, bootstrapShare, bootstrapBookmarkPlus })],
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.css',
})
export class VideoDetailsComponent {
  @Input() videoId: string = ''
}
