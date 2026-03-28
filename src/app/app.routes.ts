import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component'
import { VideoPageComponent } from './features/video/components/video-page/video-page.component'

export const routes: Routes = [
    { path: '', title: 'Home', component: HomeComponent },
    { path: 'video/:id', title: 'Video', component: VideoPageComponent },
];
