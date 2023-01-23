import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {
  private showMobile$ = new BehaviorSubject<boolean>(false);
  constructor() { }

  toggle() {
    const currentState = this.showMobile$.getValue();
    this.showMobile$.next(!currentState);
  }
}
