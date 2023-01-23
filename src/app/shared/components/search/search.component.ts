import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() search: EventEmitter<string> = new EventEmitter();

  searchValue: string = '';
  searchSubject$ = new Subject<string>();
  searchSubscription$?: Subscription;

  ngOnInit(): void {
    this.searchSubscription$ = this.searchSubject$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(q => this.search.emit(q));
  }

  onModelChange() {
    this.searchSubject$.next(this.searchValue?.trim());
  }

  ngOnDestroy(): void {
    this.searchSubscription$?.unsubscribe();
  }
}
