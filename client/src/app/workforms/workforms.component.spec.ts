import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkformsComponent } from './workforms.component';

describe('WorkformsComponent', () => {
  let component: WorkformsComponent;
  let fixture: ComponentFixture<WorkformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
