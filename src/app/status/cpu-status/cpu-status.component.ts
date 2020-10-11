import { Component, OnInit } from '@angular/core';
import { CPUUsage } from 'electron';
import { ElectronService } from '../../core/services/electron/electron.service';

@Component({
  selector: 'app-cpu-status',
  templateUrl: './cpu-status.component.html',
  styleUrls: ['./cpu-status.component.scss'],
})
export class CpuStatusComponent implements OnInit {
  cpuRate = 0;

  constructor(private electronService: ElectronService) {}

  ngOnInit(): void {
    const remote = this.electronService.remote;
    const cpuUsage: CPUUsage = remote.process.getCPUUsage();
    this.cpuRate = cpuUsage.percentCPUUsage;
  }
}
