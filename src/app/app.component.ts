import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { first, Observable, take } from 'rxjs';
import { Speech } from './interfaces';
import { SpeechService } from './services';
import { Subscription } from 'rxjs';
import { ToasterService } from './service/toaster.service';
import { ToastComponent } from './shared/components/toast/toast.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("toaster", { read: ViewContainerRef }) vcr!: ViewContainerRef;

  toastRef!: ComponentRef<ToastComponent>
  speeches$!: Observable<Speech[]>;
  toasterSubs$!: Subscription;
  toastTimeout: any;

  constructor(
    private speechService: SpeechService,
    private toasterService: ToasterService,
    private router: Router) { }

  ngOnInit(): void {
    this.speechService.loadSpeeches();
    this.speeches$ = this.speechService.getSpeeches();

    this.speeches$.pipe(take(2)).subscribe((speeches) => {
      const latestSpeechId = speeches[0]?.id;
      if (latestSpeechId) {
        this.router.navigate(['/speeches', latestSpeechId]);
      }
    });
  }

  ngAfterViewInit(): void {
    this.toasterSubs$ = this.toasterService.toast().subscribe(message => {
      if (message) {
        this.toastRef = this.vcr.createComponent(ToastComponent);
        this.toastRef.instance.message = message;

        this.toastTimeout = setTimeout(() => this.toastRef.destroy(), 3000);
      }
    });
  }

  onSearch(q: any) {
    this.speeches$ = q ? this.speechService.search(q) : this.speechService.getSpeeches();
  }

  ngOnDestroy() {
    this.toasterSubs$.unsubscribe();
    clearTimeout(this.toastTimeout);
  }
}
