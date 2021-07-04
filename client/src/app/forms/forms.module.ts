import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';

import { FormsComponentRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, SharedModule, MaterialModule, FormsComponentRoutingModule],
  declarations: [FormsComponent],
})
export class FormsComponentModule {}
