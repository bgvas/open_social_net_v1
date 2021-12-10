import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPreviewComponent } from './supplier-preview.component';

describe('SupplierPreviewComponent', () => {
  let component: SupplierPreviewComponent;
  let fixture: ComponentFixture<SupplierPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
