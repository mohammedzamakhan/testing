import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '@ticketing-system/tickets';

@Component({
  selector: 'ticketing-system-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  constructor() {}

  ngOnInit() {}
}
