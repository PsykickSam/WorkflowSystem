import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { WorkformsComponentRoutingModule } from './workforms-routing.module';

import { WorkformEditorRoutingModule } from './workform/workform.editor/workform.editor-routing.module';
import { WorkformEditorModule } from './workform/workform.editor/workform.editor.module';

import { WorkformsComponent } from './workforms.component';
import { ElementQuestionTitleDialogComponentModule } from './workform.dialog/question.title.element.dialog/question.title.wfme.dialog.module';
import { FormTitleDialogComponentModule } from './workform.dialog/title.form.dialog/title.wfm.dialog.module';

import { TitleWorkformComponentModule } from './workform.elements/title.wfm/title.wfm.module';
import { TextWorkformComponentModule } from './workform.elements/text.wfm/text.wfm.module';
import { CheckWorkformComponentModule } from './workform.elements/check.wfm/check.wfm.module';
import { RadioWorkformComponentModule } from './workform.elements/radio.wfm/radio.wfm.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    WorkformsComponentRoutingModule,
    WorkformEditorRoutingModule,
    WorkformEditorModule,
    FormTitleDialogComponentModule,
    ElementQuestionTitleDialogComponentModule,
    TitleWorkformComponentModule,
    TextWorkformComponentModule,
    CheckWorkformComponentModule,
    RadioWorkformComponentModule,
  ],
  declarations: [WorkformsComponent],
})
export class WorkformsComponentModule {}
