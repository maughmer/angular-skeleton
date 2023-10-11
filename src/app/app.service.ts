import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _isAuthenticated: boolean = false;

  constructor(
    private eventService: EventService
  ) {
    eventService.authenticated$.pipe(
      tap(authenticated => this._isAuthenticated = authenticated)
    ).subscribe();
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

}
