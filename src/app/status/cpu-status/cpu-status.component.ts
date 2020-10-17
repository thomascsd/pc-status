import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-cpu-status',
  templateUrl: './cpu-status.component.html',
  styleUrls: ['./cpu-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CpuStatusComponent implements OnInit {
  @Input() cpuRate = 0;

  constructor() {}

  ngOnInit(): void {}
}
