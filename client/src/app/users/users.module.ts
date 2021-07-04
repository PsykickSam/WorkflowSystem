import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';

import { UsersComponentRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { InviteUserDialogComponentModule } from './users.dialog/invite.user.dialog/invite.user.dialog.module';
import { NewUserDialogComponentModule } from './users.dialog/new.user.dialog/new.user.dialog.module';
import { EditUserDialogComponentModule } from './users.dialog/edit.user.dialog/edit.user.dialog.module';
import { DeleteUserDialogComponentModule } from './users.dialog/delete.user.dialog/delete.user.dialog.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    UsersComponentRoutingModule,
    InviteUserDialogComponentModule,
    NewUserDialogComponentModule,
    EditUserDialogComponentModule,
    DeleteUserDialogComponentModule,
  ],
  declarations: [UsersComponent],
})
export class UsersComponentModule {}
