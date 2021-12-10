import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorAddComponent } from './contributor-add.component';

describe('ContributorAddComponent', () => {
  let component: ContributorAddComponent;
  let fixture: ComponentFixture<ContributorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
