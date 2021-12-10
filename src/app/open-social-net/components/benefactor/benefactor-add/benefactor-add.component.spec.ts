import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefactorAddComponent } from './benefactor-add.component';

describe('BenefactorAddComponent', () => {
  let component: BenefactorAddComponent;
  let fixture: ComponentFixture<BenefactorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefactorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefactorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
