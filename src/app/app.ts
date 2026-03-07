import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapHandThumbsUp, bootstrapHandThumbsDown } from '@ng-icons/bootstrap-icons';

import { NavBar } from './core/components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIconComponent, NavBar],
  providers: [provideIcons({ bootstrapHandThumbsUp, bootstrapHandThumbsDown })],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('generic-video-platform');
}
