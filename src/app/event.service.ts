import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _authenticated = new Subject<boolean>();

  authenticated$ = this._authenticated.asObservable();

  set authenticated(value: boolean) {
    this._authenticated.next(value);
  }
}
