import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorPreviewComponent } from './contributor-preview.component';

describe('ContributorPreviewComponent', () => {
  let component: ContributorPreviewComponent;
  let fixture: ComponentFixture<ContributorPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
