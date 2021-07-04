import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthComponentModule } from '@app/auth';

import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UsersComponentModule } from './users/users.module';

import { WorkflowsComponentModule } from './workflows/workflows.module';
import { WorkformsComponentModule } from './workforms/workforms.module';

import { FormsComponentModule } from './forms/forms.module';
import { RequestsComponentModule } from './requests/requests.module';
// import { WorkformEditorModule } from './workforms/workform/workform.editor/workform.editor.module';
// import { FormTitleDialogComponentModule } from './workforms/workform.dialog/title.form.dialog/title.wfm.dialog.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,

    HomeModule,
    AuthComponentModule,
    UsersComponentModule,
    AppRoutingModule,

    WorkflowsComponentModule,
    WorkformsComponentModule,

    FormsComponentModule,
    RequestsComponentModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
