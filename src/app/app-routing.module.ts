import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'PayrollAdmin', loadChildren: () => import('./Modules/payroll-admin/payroll-admin.module').then(m => m.PayrollAdminModule) }, 
  { path: 'PayrollProcessor', loadChildren: () => import('./Modules/payroll-processor/payroll-processor.module').then(m => m.PayrollProcessorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
