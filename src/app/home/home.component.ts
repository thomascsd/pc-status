import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CPUUsage, ProcessMemoryInfo, SystemMemoryInfo } from 'electron';
import { ElectronService } from 'app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cpuRate = 0;
  total = 0;
  free = 0;
  process = 0;

  constructor(private router: Router, private electronService: ElectronService) {}

  ngOnInit(): void {
    if (this.electronService.isElectron) {
      setInterval(async () => {
        const process = this.electronService.remote.process;
        const cpuUsage: CPUUsage = process.getCPUUsage();
        const processRam: ProcessMemoryInfo = await process.getProcessMemoryInfo();
        const sysRam: SystemMemoryInfo = process.getSystemMemoryInfo();

        this.cpuRate = Math.round(cpuUsage.percentCPUUsage * 100);
        this.total = Math.round(sysRam.total / 1024);
        this.free = Math.round(sysRam.free / 1024);
        this.process = Math.round(processRam.private / 1024);
      }, 1000);
    }
  }
}
