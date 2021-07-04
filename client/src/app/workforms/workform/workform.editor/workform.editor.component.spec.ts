import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkformEditorComponent } from './workform.editor.component';

describe('WorkformEditorComponent', () => {
  let component: WorkformEditorComponent;
  let fixture: ComponentFixture<WorkformEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkformEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkformEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
