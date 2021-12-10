import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefactorListComponent } from './benefactor-list.component';

describe('BenefactorListComponent', () => {
  let component: BenefactorListComponent;
  let fixture: ComponentFixture<BenefactorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefactorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefactorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
