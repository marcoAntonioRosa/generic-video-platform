import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap/collapse';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { bootstrapList, bootstrapRocketTakeoff, bootstrapSearch, bootstrapMic, bootstrapPlusLg, bootstrapBell, bootstrapPerson } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-nav-bar',
  imports: [NgbCollapse, RouterLink, NgIconComponent],
  providers: [provideIcons({ bootstrapList, bootstrapRocketTakeoff, bootstrapSearch, bootstrapMic, bootstrapPlusLg, bootstrapBell, bootstrapPerson })],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  isCollapsed = false;
  isMenuCollapsed = true;
}