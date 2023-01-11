import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollProcessorComponent } from './payroll-processor.component';

const routes: Routes = [{ path: '', component: PayrollProcessorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollProcessorRoutingModule { }
