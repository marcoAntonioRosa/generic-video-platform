import { Component, Input } from '@angular/core';
import {
  NgbAccordionButton,
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionToggle,
  NgbAccordionBody,
  NgbAccordionCollapse
} from '@ng-bootstrap/ng-bootstrap/accordion';

@Component({
  selector: 'app-description',
  imports: [NgbAccordionButton,
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionToggle,
    NgbAccordionBody,
    NgbAccordionCollapse],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent {
  @Input() views: string = '';
  @Input() uploadDate: string = '';
}
