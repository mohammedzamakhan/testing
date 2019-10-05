import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      {
        path: 'ticket/:id',
        loadChildren: () =>
          import('@ticketing-system/ticket-details').then(m => m.TicketModule)
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
