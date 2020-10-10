import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuStatusComponent } from './cpu-status.component';

describe('CpuStatusComponent', () => {
  let component: CpuStatusComponent;
  let fixture: ComponentFixture<CpuStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
