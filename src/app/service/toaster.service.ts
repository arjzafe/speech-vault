import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private toaster$ = new BehaviorSubject<any>(null);

  constructor() { }

  toast() {
    return this.toaster$;
  }

  success(message: string) {
    this.toaster$.next(message);
  }
}
