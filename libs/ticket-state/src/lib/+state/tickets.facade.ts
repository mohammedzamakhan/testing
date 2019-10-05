import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { TicketsPartialState } from './tickets.reducer';
import { ticketsQuery } from './tickets.selectors';
import {
  LoadTickets,
  UpdateSearch,
  UpdateFilter,
  SelectTicket
} from './tickets.actions';

@Injectable()
export class TicketsFacade {
  loaded$ = this.store.pipe(select(ticketsQuery.getLoaded));
  allTickets$ = this.store.pipe(select(ticketsQuery.getAllTickets));
  filteredTickets$ = this.store.pipe(select(ticketsQuery.getTickets));
  selectedTicket$ = this.store.pipe(select(ticketsQuery.getSelectedTicket));

  constructor(private store: Store<TicketsPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadTickets());
  }

  updateSearch(value: string) {
    this.store.dispatch(new UpdateSearch(value));
  }

  updateFilter(value: boolean) {
    this.store.dispatch(new UpdateFilter(value));
  }

  select(ticketId: string) {
    this.store.dispatch(new SelectTicket(ticketId));
  }
}
