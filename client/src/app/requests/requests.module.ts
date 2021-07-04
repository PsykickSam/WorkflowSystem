import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';

import { RequestsComponentRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, SharedModule, MaterialModule, RequestsComponentRoutingModule],
  declarations: [RequestsComponent],
})
export class RequestsComponentModule {}
