import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';

import { ElementQuestionTitleDialogComponent } from './question.title.wfme.dialog.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, FlexLayoutModule, MaterialModule, FormsModule],
  declarations: [ElementQuestionTitleDialogComponent],
})
export class ElementQuestionTitleDialogComponentModule {}
