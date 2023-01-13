import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


const ngWizardConfig: NgWizardConfig = {
  theme: THEME.circles
};
@NgModule({
  declarations: [
    SharedComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    NgxPaginationModule,
    NgxDropzoneModule,
    NgWizardModule,
    Ng2SearchPipeModule,
    // NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgxDropzoneModule,
    NgxPaginationModule,
    NgWizardModule,
    Ng2SearchPipeModule,
    //  LoaderComponent,
      // NgMultiSelectDropDownModule,
      //Ng2SearchPipeModule,
    //  SpinnerComponent,
    //  ConnectionServiceModule

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
    DatePipe,
    
  ]
})
export class SharedModule { }
