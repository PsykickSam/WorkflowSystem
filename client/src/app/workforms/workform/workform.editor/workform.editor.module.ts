import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';

import { WorkformEditorRoutingModule } from './workform.editor-routing.module';
import { WorkformEditorComponent } from './workform.editor.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, FlexLayoutModule, MaterialModule, WorkformEditorRoutingModule],
  declarations: [WorkformEditorComponent],
})
export class WorkformEditorModule {}
