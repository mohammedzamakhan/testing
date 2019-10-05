import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { TicketsService } from '@ticketing-system/tickets';
import { Store, select } from '@ngrx/store';
import { withLatestFrom, switchMap, map } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';

import { TicketsState } from './tickets.reducer';
import { ticketsQuery } from './tickets.selectors';

import { TicketsPartialState } from './tickets.reducer';
import {
  LoadTickets,
  TicketsLoaded,
  TicketsLoadError,
  TicketsActionTypes
} from './tickets.actions';

@Injectable()
export class TicketsEffects {
  loaded$ = this.store.pipe(select(ticketsQuery.getLoaded));

  @Effect() loadTickets$ = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT, TicketsActionTypes.LoadTickets),
    withLatestFrom(this.loaded$),
    switchMap(([_, loaded]) => {
      return loaded
        ? of([null, null])
        : forkJoin(this.ticketsService.tickets(), this.ticketsService.users());
    }),
    map(([tickets, users]) => {
      if (tickets) {
        // tickets = updateWithAvatars(tickets, users);
        return new TicketsLoaded(tickets);
      }
      return null;
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TicketsPartialState>,
    private ticketsService: TicketsService,
    private store: Store<TicketsState>
  ) {}
}
