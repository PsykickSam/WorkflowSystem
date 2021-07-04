import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workflow.EditorComponent } from './workflow.editor.component';

describe('Workflow.EditorComponent', () => {
  let component: Workflow.EditorComponent;
  let fixture: ComponentFixture<Workflow.EditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Workflow.EditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Workflow.EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
