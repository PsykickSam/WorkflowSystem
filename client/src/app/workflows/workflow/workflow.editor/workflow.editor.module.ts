import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { WorkflowsRoutingModule } from './workflow.editor-routing.module';
import { WorkflowEditorComponent } from './workflow.editor.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, FlexLayoutModule, MaterialModule, WorkflowsRoutingModule],
  declarations: [WorkflowEditorComponent],
})
export class WorkflowEditorModule {}
