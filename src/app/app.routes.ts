import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { Video } from './features/pages/video/video';

export const routes: Routes = [
    { path: '', title: 'Home', component: Home },
    { path: 'video/:id', title: 'Video', component: Video },
];
