import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription, tap } from 'rxjs';

import { EventService } from '../event.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  private subscriptions: Subscription[] = [];
  isAuthenticated = false;

  constructor(
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit() {
    let subscription = this.eventService.authenticated$.pipe(
      tap(authenticated => this.isAuthenticated = authenticated)
    ).subscribe();
    this.subscriptions.push(subscription);
  }

  login() {
    this.router.navigateByUrl('login');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
