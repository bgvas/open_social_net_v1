import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefactorPreviewComponent } from './benefactor-preview.component';

describe('BenefactorPreviewComponent', () => {
  let component: BenefactorPreviewComponent;
  let fixture: ComponentFixture<BenefactorPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefactorPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefactorPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
