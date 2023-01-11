import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollProcessorRoutingModule } from './payroll-processor-routing.module';
import { PayrollProcessorComponent } from './payroll-processor.component';


@NgModule({
  declarations: [
    PayrollProcessorComponent
  ],
  imports: [
    CommonModule,
    PayrollProcessorRoutingModule
  ]
})
export class PayrollProcessorModule { }
