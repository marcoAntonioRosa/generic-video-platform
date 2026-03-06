import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapHandThumbsUp, bootstrapHandThumbsDown } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIconComponent],
  providers: [provideIcons({ bootstrapHandThumbsUp, bootstrapHandThumbsDown })],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('generic-video-platform');
}
