import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Speech } from '@app/interfaces';
import { ToasterService } from '@app/service/toaster.service';
import { SpeechService } from '@app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-speech',
  templateUrl: './view-speech.component.html',
  styleUrls: ['./view-speech.component.scss']
})
export class ViewSpeechComponent implements OnInit, OnDestroy {
  id!: string;
  speech!: Speech | null;
  speechSubs$!: Subscription;
  routeParamsSubs$!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private speechService: SpeechService,
    private toasterService: ToasterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeParamsSubs$ = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.speechSubs$ = this.speechService.findById(this.id).subscribe(speech => this.speech = speech);
    });
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this speech?')) {
      const nextItemId = this.speechService.getNextItemId(this.id);
      this.speechService.deleteById(this.id);
      this.toasterService.success("Speech has been succesfully deleted.");
      this.router.navigate(['/speeches', nextItemId]);
    }
  }

  ngOnDestroy(): void {
    this.routeParamsSubs$?.unsubscribe();
    this.speechSubs$?.unsubscribe();
  }
}
