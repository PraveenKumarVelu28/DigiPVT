import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollAdminComponent } from './payroll-admin.component';

const routes: Routes = [{ path: '', component: PayrollAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollAdminRoutingModule { }
