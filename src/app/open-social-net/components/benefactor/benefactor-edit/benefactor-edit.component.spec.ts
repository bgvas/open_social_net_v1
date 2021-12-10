import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefactorEditComponent } from './benefactor-edit.component';

describe('BenefactorEditComponent', () => {
  let component: BenefactorEditComponent;
  let fixture: ComponentFixture<BenefactorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefactorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefactorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
