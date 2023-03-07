import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxFullCalendarModule } from 'ngx-fullcalendar';
import { LoaderComponent } from 'src/app/Pages/CommanPages/loader/loader.component';
import { HelpComponent } from './help/help.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { FormsModule } from '@angular/forms';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { SupportTicketDashboardComponent } from './support-ticket-dashboard/support-ticket-dashboard.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { AuthGuard } from 'src/app/Pages/Services/services/auth.guard';
import { CommonalertpageComponent } from './commonalertpage/commonalertpage.component';
//import {ConnectionServiceModule, ConnectionServiceOptions, ConnectionServiceOptionsToken} from 'ngx-connection-service';
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.circles
};
@NgModule({
  declarations: [
    SharedComponent,
    LoaderComponent,
    HelpComponent,
    SpinnerComponent,
    SupportTicketDashboardComponent,
    SupportTicketsComponent,
    CommonalertpageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgWizardModule.forRoot(ngWizardConfig),
    SharedRoutingModule,
    DropzoneModule,
    NgxDropzoneModule,
    NgxFullCalendarModule,
    Ng2SearchPipeModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule,
    NgxOrgChartModule,
  //  ConnectionServiceModule

  ],
  exports: [
    DropzoneModule,
    NgxDropzoneModule,
    NgxFullCalendarModule,
    Ng2SearchPipeModule,
    LoaderComponent,
    SpinnerComponent,
    NgMultiSelectDropDownModule,
    NgxPaginationModule,
    NgxOrgChartModule,
    FormsModule,
    NgWizardModule,
    CommonalertpageComponent
    //ConnectionServiceModule

  ],
  providers: [
    // {
    //   provide: ConnectionServiceOptionsToken,
    //   useValue: <ConnectionServiceOptions>{
    //     enableHeartbeat: false,
    //     heartbeatUrl: '/assets/ping.json',
    //     requestMethod: 'get',
    //     heartbeatInterval: 3000
    //   }
    // },
    AuthGuard, 
    DatePipe,
    
  ]
})
export class SharedModule { }