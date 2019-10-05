import { Component } from '@angular/core';
import { TicketsFacade } from '@ticketing-system/ticket-state';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
@Component({
  selector: 'ticketing-system-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tickets = this.ticketsFacade.filteredTickets$;
  search$ = new Subject();
  filter$ = new Subject();
  constructor(private ticketsFacade: TicketsFacade, private store: Store<any>) {
    this.ticketsFacade.loadAll();
    this.search$.subscribe((value: string) => {
      this.ticketsFacade.updateSearch(value);
    });
    this.filter$.subscribe((value: boolean) => {
      this.ticketsFacade.updateFilter(value);
    });
  }
}
