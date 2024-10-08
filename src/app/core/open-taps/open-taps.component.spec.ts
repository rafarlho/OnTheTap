import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTapsComponent } from './open-taps.component';

describe('OpenTapsComponent', () => {
  let component: OpenTapsComponent;
  let fixture: ComponentFixture<OpenTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenTapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
