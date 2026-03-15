import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { bootstrapList, bootstrapRocketTakeoff, bootstrapSearch, bootstrapMic, bootstrapPlusLg, bootstrapBell, bootstrapPerson } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-nav-bar',
  imports: [NgIconComponent],
  providers: [provideIcons({ bootstrapList, bootstrapRocketTakeoff, bootstrapSearch, bootstrapMic, bootstrapPlusLg, bootstrapBell, bootstrapPerson })],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar { }
