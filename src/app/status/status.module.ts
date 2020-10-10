import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { CpuStatusComponent } from './cpu-status/cpu-status.component';


@NgModule({
  declarations: [CpuStatusComponent],
  imports: [
    CommonModule,
    StatusRoutingModule
  ]
})
export class StatusModule { }
