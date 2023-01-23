import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Speech } from '@app/interfaces';

@Component({
  selector: 'app-speech-list-item',
  templateUrl: './speech-list-item.component.html',
  styleUrls: ['./speech-list-item.component.scss']
})
export class SpeechListItemComponent {
  @Output() selected: EventEmitter<null> = new EventEmitter();
  @Input() speech!: Speech;

  onClick() {
    this.selected.emit(null);
  }
}
