import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollAdminRoutingModule } from './payroll-admin-routing.module';
import { PayrollAdminComponent } from './payroll-admin.component';


@NgModule({
  declarations: [
    PayrollAdminComponent
  ],
  imports: [
    CommonModule,
    PayrollAdminRoutingModule
  ]
})
export class PayrollAdminModule { }
