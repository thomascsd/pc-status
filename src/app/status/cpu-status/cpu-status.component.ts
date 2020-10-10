import { Component, OnInit } from '@angular/core';
import { CPUUsage } from 'electron';

@Component({
  selector: 'app-cpu-status',
  templateUrl: './cpu-status.component.html',
  styleUrls: ['./cpu-status.component.scss'],
})
export class CpuStatusComponent implements OnInit {
  cpuRate = 0;

  constructor() {}

  ngOnInit(): void {}
}
