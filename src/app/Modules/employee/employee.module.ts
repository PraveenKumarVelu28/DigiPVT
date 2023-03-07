import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { StaffDetailsWizardComponent } from './staff-details-wizard/staff-details-wizard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        EmployeeComponent,
        StaffDetailsWizardComponent,
        StaffDashboardComponent,
    ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        SharedModule,
  
    ]
})
export class EmployeeModule { }
