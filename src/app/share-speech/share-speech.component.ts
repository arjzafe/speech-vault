import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Speech } from '@app/interfaces';
import { ToasterService } from '@app/service/toaster.service';
import { SpeechService } from '@app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-share-speech',
  templateUrl: './share-speech.component.html',
  styleUrls: ['./share-speech.component.scss']
})
export class ShareSpeechComponent {
  
  emailForm!: FormGroup;
  speech!: Speech | null;
  speechSubs$!: Subscription;
  routeParamsSubs$!: Subscription;
  
  constructor(
    private route: ActivatedRoute, 
    private speechService: SpeechService,
    private fb: FormBuilder,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.routeParamsSubs$ = this.route.params.subscribe(params => {
      this.speechSubs$ = this.speechService.findById(params['id']).subscribe(speech => this.speech = speech);
    });

    this.emailForm = this.fb.group({
      email: [[], Validators.required]
    })
  }

  onSubmit(e: any) {
    if (this.emailForm.valid) {
      const emails: string[] = this.emailForm.get('email')?.value;
      const emailTo = emails.join(',');
      window.location.href = `mailto:${emailTo}?&subject=Speech by ${this.speech?.author}&body=${this.speech?.content}`;
      this.toasterService.success('Message sent.');
    }
  }

  ngOnDestroy(): void {
    this.routeParamsSubs$?.unsubscribe();
    this.speechSubs$?.unsubscribe();
  }

  get email() {
    return this.emailForm.get('email');
  }
}
