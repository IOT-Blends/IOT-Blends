import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private isUserLoggedInSub = new BehaviorSubject<boolean>(true);
  isUserLoggedIn$: Observable<boolean> = this.isUserLoggedInSub.asObservable();

  constructor() {}

  isUserLoggedIn(isLoggedIn: boolean) {
    this.isUserLoggedInSub.next(isLoggedIn);
  }
}
