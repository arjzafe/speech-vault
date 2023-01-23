import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speech } from '@app/interfaces';
import { BehaviorSubject, first, map, Observable, single } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private speeches$ = new BehaviorSubject<Speech[]>([]);

  constructor(private http: HttpClient) { }

  loadSpeeches() {
    this.http
      .get<Speech[]>(`${environment.apiUrl}/assets/speeches.json`)
      .pipe(
        map(speeches => {
          return speeches.sort(this.sortByDate)
        })
      )
      .subscribe(speeches => this.speeches$.next(speeches));
  }

  findById(id: string): Observable<Speech | null> {
    return this.speeches$.pipe(
      map(speeches => speeches.find(speech => speech.id === id) || null) 
    );
  }

  getSpeeches(): Observable<Speech[]> {
    return this.speeches$.pipe(map(speeches => {
      return speeches.sort(this.sortByDate)
    }));
  }

  addSpeech(speech: Speech) {
    this.speeches$.next(this.speeches$.getValue().concat([speech]));
  }
  
  deleteById(id: string) {
    const currentValue = this.speeches$.getValue();
    const itemIndex = currentValue.findIndex(speech => speech.id === id);
    const newValue = [...currentValue.slice(0, itemIndex), ...currentValue.slice(itemIndex + 1)];
    this.speeches$.next(newValue);
  }

  updateSpeechById(id: string, formInput: Speech): void {
    const updatedValue = this.speeches$.getValue().map(speech => {
      if (speech.id !== id) 
        return speech;
  
      return { ...speech, ...formInput };
    });
    this.speeches$.next(updatedValue);
  }

  search(q: string): Observable<Speech[]> {
    return this.speeches$.pipe(
      map((speeches: Speech[]) => {
        return speeches.filter((speech) => this.makePropsSearchable(speech).indexOf(q.toLowerCase()) > -1)
      }),
      map(speeches => {
        return speeches.sort(this.sortByDate)
      })
    );
  }

  getNextItemId(id: string) {
    const currentValue = this.speeches$.getValue();
    const selectedIndex = currentValue.findIndex(speech => speech.id === id);
    return currentValue[selectedIndex+1]?.id;
  }

  private makePropsSearchable(speech: Speech) {
    const { content, keywords, author } = speech;
    return `${content} ${keywords.join(' ')} ${author}`.toLowerCase();
  }

  private sortByDate(a: Speech, b: Speech) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }
}
