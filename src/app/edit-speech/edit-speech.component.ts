import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Speech } from '@app/interfaces';
import { ToasterService } from '@app/service/toaster.service';
import { SpeechService } from '@app/services';
import { SpeechFormComponent } from '@app/shared/components/speech-form/speech-form.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-speech',
  templateUrl: './edit-speech.component.html',
  styleUrls: ['./edit-speech.component.scss']
})
export class EditSpeechComponent {
  @ViewChild(SpeechFormComponent) speechForm!: SpeechFormComponent;

  id!: string;
  speech!: Speech | null;
  speechSubs$!: Subscription;
  routeParamsSubs$!: Subscription;
  
  constructor(
    private route: ActivatedRoute, 
    private speechService: SpeechService,
    private toasterService: ToasterService,
    private router: Router) {}
  
  ngOnInit(): void {
    this.routeParamsSubs$ = this.route.params.subscribe(params => {
      this.id = params['id']
      this.speechSubs$ = this.speechService.findById(this.id)
        .subscribe(speech => this.speech = speech);
    });
  }

  updateSpeech() {
    const speech: Speech = this.speechForm.rawValue;
    if (this.speechForm.isValid) {
      this.speechService.updateSpeechById(speech.id, speech);
      this.toasterService.success("Speech has been successfully updated");
      this.router.navigate(['/speeches', speech.id]);
    }
  }

  ngOnDestroy(): void {
    this.routeParamsSubs$?.unsubscribe();
    this.speechSubs$?.unsubscribe();
  }
}
