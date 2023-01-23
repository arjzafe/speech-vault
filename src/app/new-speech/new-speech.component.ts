import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Speech } from '@app/interfaces';
import { ToasterService } from '@app/service/toaster.service';
import { SpeechService } from '@app/services';
import { SpeechFormComponent } from '@app/shared/components/speech-form/speech-form.component';

@Component({
  selector: 'app-new-speech',
  templateUrl: './new-speech.component.html',
  styleUrls: ['./new-speech.component.scss']
})
export class NewSpeechComponent implements OnInit {
  @ViewChild(SpeechFormComponent) speechForm!: SpeechFormComponent;

  constructor(
    private speechService: SpeechService, 
    private toasterService: ToasterService,
    private router: Router) {}

  ngOnInit(): void {
  }

  addSpeech() {
    if (this.speechForm.isValid) {
      const speech: Speech = this.speechForm.rawValue;
      this.speechService.addSpeech(speech);
      this.toasterService.success("Speech has been successfully added");
      this.router.navigate(['/speeches', speech.id]);
    }
  }
}
