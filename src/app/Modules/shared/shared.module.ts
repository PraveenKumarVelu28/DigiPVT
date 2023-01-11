import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
  //  Ng2SearchPipeModule
  ],
  exports: [
    FormsModule,
    //  NgWizardModule,
        //  LoaderComponent,
    //  NgMultiSelectDropDownModule,
    //  NgxDropzoneModule,
    //  Ng2SearchPipeModule,
    //  NgxPaginationModule,
    //  SpinnerComponent,
     
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
    DatePipe,
    
  ]
})
export class SharedModule { }
