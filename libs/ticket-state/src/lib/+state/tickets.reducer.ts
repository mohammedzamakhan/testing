import { Ticket } from '@ticketing-system/tickets';
import {
  TicketsAction,
  TicketsActionTypes,
  TicketFilterOptions
} from './tickets.actions';

export const TICKETS_FEATURE_KEY = 'tickets';

/**
 * Interface for the 'Tickets' data used in
 *  - TicketsState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

export interface TicketsState {
  list: Ticket[]; // list of Tickets; analogous to a sql normalized table
  selectedId?: string | number; // which Tickets record has been selected
  loaded: boolean; // has the Tickets list been loaded
  error?: any; // last none error (if any)
  searchCriteria?: TicketFilterOptions;
  selectedTicketId?: string;
}

export interface TicketsPartialState {
  readonly [TICKETS_FEATURE_KEY]: TicketsState;
}

export const initialState: TicketsState = {
  list: [],
  loaded: false,
  searchCriteria: {
    showAll: false,
    search: ''
  }
};

export function reducer(
  state: TicketsState = initialState,
  action: TicketsAction
): TicketsState {
  switch (action.type) {
    case TicketsActionTypes.TicketsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case TicketsActionTypes.UpdateSearch: {
      state = {
        ...state,
        searchCriteria: {
          ...state.searchCriteria,
          search: action.payload
        }
      };
      break;
    }

    case TicketsActionTypes.UpdateFilter: {
      state = {
        ...state,
        searchCriteria: {
          ...state.searchCriteria,
          showAll: action.payload
        }
      };
      break;
    }

    case TicketsActionTypes.SelectTicket: {
      state = {
        ...state,
        selectedTicketId: action.payload
      };
    }
  }
  return state;
}

export function applyTicketFilters(
  filters: TicketFilterOptions,
  list: Ticket[]
): Ticket[] {
  return list
    .filter(it => matchesSearch(filters.search, it))
    .filter(filters.showAll ? showAll : showNotCompleted);
}

const showAll = ticket => ticket;
const showNotCompleted = (t: Ticket): boolean => t.completed !== true;

/**
 * Determine if criteria matches ticket description
 */
function matchesSearch(criteria: string, ticket: Ticket): boolean {
  const description = ticket.description.toLowerCase();

  criteria = criteria.toLowerCase();

  return description.includes(criteria);
}
