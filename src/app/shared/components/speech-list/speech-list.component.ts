import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Speech } from '@app/interfaces';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.scss']
})
export class SpeechListComponent {
  @Output() selected: EventEmitter<null> = new EventEmitter();
  @Input() speeches: Speech[] | null = [];

  onSelected() {
    this.selected.emit(null);
  }
}
