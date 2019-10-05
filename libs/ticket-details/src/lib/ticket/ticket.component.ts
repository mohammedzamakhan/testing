import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsFacade } from '@ticketing-system/ticket-state';

@Component({
  selector: 'ticketing-system-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  selectedTicket = this.tickets.selectedTicket$;
  constructor(private tickets: TicketsFacade, public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.tickets.select(params.id);
    });
  }

  ngOnInit() {}
}
