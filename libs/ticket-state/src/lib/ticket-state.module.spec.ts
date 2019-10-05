import { async, TestBed } from '@angular/core/testing';
import { TicketStateModule } from './ticket-state.module';

describe('TicketStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TicketStateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TicketStateModule).toBeDefined();
  });
});
