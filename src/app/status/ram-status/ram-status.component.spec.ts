import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamStatusComponent } from './ram-status.component';

describe('RamStatusComponent', () => {
  let component: RamStatusComponent;
  let fixture: ComponentFixture<RamStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
