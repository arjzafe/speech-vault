import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Speech } from '@app/interfaces';
import { UuidService } from '@app/services/uuid.service';

@Component({
  selector: 'app-speech-form',
  templateUrl: './speech-form.component.html',
  styleUrls: ['./speech-form.component.scss']
})
export class SpeechFormComponent implements OnInit {
  @Input() speech!: Speech | null;
  @Input() buttonLabel: string = 'Save';
  @Output() submitSpeech: EventEmitter<Speech> = new EventEmitter();

  speechForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private uuidService: UuidService, 
    private datePipe: DatePipe) {}

  ngOnInit(): void {
    const speechId = this.speech?.id || this.uuidService.make();
    let keywords: string[] = [];

    if (this.speech?.keywords) {
      keywords = [...this.speech.keywords];
    }

    this.speechForm = this.fb.group({
      id: [speechId],
      content: [this.speech?.content, Validators.required],
      author:[this.speech?.author, Validators.required],
      date: [this.datePipe.transform(this.speech?.date, 'yyyy-MM-dd'), Validators.required],
      keywords: [keywords]
    })
  }

  onSubmit(e: any) {
    e.preventDefault();
  }

  get isValid() {
    return this.speechForm.valid;
  }

  get rawValue() {
    return this.speechForm.getRawValue();
  }

  get author() {
    return this.speechForm.get('author')
  }

  get date() {
    return this.speechForm.get('date')
  }

  get content() {
    return this.speechForm.get('content')
  }
}
