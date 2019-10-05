import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from './ticket.component';
import { SharedModule } from '@ticketing-system/shared';

const routes: Routes = [{ path: '', component: TicketComponent }];

@NgModule({
  declarations: [TicketComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class TicketModule {}
