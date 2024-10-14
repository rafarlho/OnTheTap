import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingDialogComponent } from './charging-dialog.component';

describe('ChargingDialogComponent', () => {
  let component: ChargingDialogComponent;
  let fixture: ComponentFixture<ChargingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargingDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
