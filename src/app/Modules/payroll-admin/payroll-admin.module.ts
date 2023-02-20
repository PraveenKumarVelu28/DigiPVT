import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollAdminRoutingModule } from './payroll-admin-routing.module';
import { PayrollAdminComponent } from './payroll-admin.component';
import { ValidationpasswordDashboardComponent } from './validationpassword-dashboard/validationpassword-dashboard.component';
import { ValidationpasswordFormComponent } from './validationpassword-form/validationpassword-form.component';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    PayrollAdminComponent,
    ValidationpasswordDashboardComponent,
    ValidationpasswordFormComponent,
    AdminDashboardComponent
  ],
  imports: [
   
    PayrollAdminRoutingModule,
    SharedModule
  ]
})
export class PayrollAdminModule { }
