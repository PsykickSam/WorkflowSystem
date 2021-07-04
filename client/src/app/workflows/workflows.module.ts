import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { WorkflowsComponentRoutingModule } from './workflows-routing.module';
import { WorkflowEditorModule } from './workflow/workflow.editor/workflow.editor.module';
import { WorkflowsComponent } from './workflows.component';

import { BlockWorkflowComponentModule } from './workflow.elements/block.wfw/block.wfw.module';
import { LineWorkflowComponentModule } from './workflow.elements/line.wfw/line.wfw.module';

import { EditBlockLineDialogComponentModule } from './workflow.dialog/edit.element.dialog/edit.wfwe.dialog.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    WorkflowsComponentRoutingModule,
    WorkflowEditorModule,
    BlockWorkflowComponentModule,
    LineWorkflowComponentModule,
    EditBlockLineDialogComponentModule,
  ],
  declarations: [WorkflowsComponent],
})
export class WorkflowsComponentModule {}
