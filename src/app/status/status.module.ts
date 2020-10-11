import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpuStatusComponent } from './cpu-status/cpu-status.component';

@NgModule({
  declarations: [CpuStatusComponent],
  imports: [CommonModule],
  exports: [CpuStatusComponent],
})
export class StatusModule {}
