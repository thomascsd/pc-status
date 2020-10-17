import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpuStatusComponent } from './cpu-status/cpu-status.component';
import { RamStatusComponent } from './ram-status/ram-status.component';

@NgModule({
  declarations: [CpuStatusComponent, RamStatusComponent],
  imports: [CommonModule],
  exports: [CpuStatusComponent, RamStatusComponent],
})
export class StatusModule {}
