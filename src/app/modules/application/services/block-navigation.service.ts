import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlockNavigationService {
  private unsubscriber : Subject<void> = new Subject<void>();
  constructor() { }

  public blockBackNavigation() {
    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(takeUntil(this.unsubscriber)).subscribe((_) => {
      history.pushState(null, '');
      console.log(`You can't make changes or go back at this time.`);
    });
  }

}
