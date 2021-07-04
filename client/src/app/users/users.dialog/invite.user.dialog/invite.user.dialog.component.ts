import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IInviteUser } from '../interface/dialog.interface';

@Component({
  selector: 'invite-user-dialog',
  templateUrl: './invite.user.dialog.component.html',
  styleUrls: ['./invite.user.dialog.component.scss']
})
export class InviteUserDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InviteUserDialogComponent>,
    // @Inject(null) public data: IInviteUser
    ) { }

  ngOnInit(): void {
  }

}
