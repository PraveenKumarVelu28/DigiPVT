import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Pages/Services/services/auth.guard';

import { SharedComponent } from './shared.component';
import { SupportTicketDashboardComponent } from './support-ticket-dashboard/support-ticket-dashboard.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', component: SharedComponent },
  { path: 'SupportTicketDashboard', component: SupportTicketDashboardComponent , canActivate: [AuthGuard] },
  { path: 'SupportTickets', component: SupportTicketsComponent  ,canActivate: [AuthGuard]},
  { path: 'SupportTickets/:id', component: SupportTicketsComponent  ,canActivate: [AuthGuard]},
  { path: 'Help', component: HelpComponent  ,canActivate: [AuthGuard]},

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }