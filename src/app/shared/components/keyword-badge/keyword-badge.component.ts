import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keyword-badge',
  templateUrl: './keyword-badge.component.html',
  styleUrls: ['./keyword-badge.component.scss']
})
export class KeywordBadgeComponent {
  @Input() keywords: string[] = [];
  @Input() className: string = '';
}
