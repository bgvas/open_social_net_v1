import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryNeedsComponent } from './beneficiary-needs.component';

describe('BeneficiaryNeedsComponent', () => {
  let component: BeneficiaryNeedsComponent;
  let fixture: ComponentFixture<BeneficiaryNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryNeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
