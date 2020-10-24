import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-ram-status',
  templateUrl: './ram-status.component.html',
  styleUrls: ['./ram-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RamStatusComponent implements OnInit {
  @Input() total = 0;
  @Input() free = 0;
  @Input() process = 0;

  constructor() {}

  ngOnInit(): void {}
}
