import { async, TestBed } from '@angular/core/testing';
import { TicketDetailsModule } from './ticket-details.module';

describe('TicketDetailsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TicketDetailsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TicketDetailsModule).toBeDefined();
  });
});
