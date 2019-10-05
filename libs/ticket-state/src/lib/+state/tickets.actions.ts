import { Action } from '@ngrx/store';
import { Ticket } from '@ticketing-system/tickets';

export enum TicketsActionTypes {
  LoadTickets = '[Tickets] Load Tickets',
  TicketsLoaded = '[Tickets] Tickets Loaded',
  TicketsLoadError = '[Tickets] Tickets Load Error',
  UpdateSearch = '[Tickets] Update Search',
  UpdateFilter = '[Tickets] Update Filter',
  SelectTicket = '[Tickets] Select Ticket'
}

export class TicketFilterOptions {
  constructor(public search: string, public showAll = false) {}
}

export class LoadTickets implements Action {
  readonly type = TicketsActionTypes.LoadTickets;
}

export class TicketsLoadError implements Action {
  readonly type = TicketsActionTypes.TicketsLoadError;
  constructor(public payload: any) {}
}

export class TicketsLoaded implements Action {
  readonly type = TicketsActionTypes.TicketsLoaded;
  constructor(public payload: Ticket[]) {}
}

export class UpdateSearch implements Action {
  readonly type = TicketsActionTypes.UpdateSearch;
  constructor(public payload: string) {}
}

export class UpdateFilter implements Action {
  readonly type = TicketsActionTypes.UpdateFilter;
  constructor(public payload: boolean) {}
}

export class SelectTicket implements Action {
  readonly type = TicketsActionTypes.SelectTicket;
  constructor(public payload: string) {}
}

export type TicketsAction =
  | LoadTickets
  | TicketsLoaded
  | TicketsLoadError
  | UpdateSearch
  | UpdateFilter
  | SelectTicket;

export const fromTicketsActions = {
  LoadTickets,
  TicketsLoaded,
  TicketsLoadError,
  UpdateSearch,
  UpdateFilter,
  SelectTicket
};
