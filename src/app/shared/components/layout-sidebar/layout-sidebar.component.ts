import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Speech } from '@app/interfaces';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent {
  showMobile: boolean = false;
  @Input() speeches!: Speech[] | null;
  @Output() search: EventEmitter<string> = new EventEmitter();

  onSearch(q: string) {
    this.search.emit(q);
  }

  toggleMobileMenu() {
    this.showMobile = !this.showMobile;
  }

}
