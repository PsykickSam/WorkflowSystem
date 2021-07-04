import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'edit-user-dialog',
  templateUrl: './edit.user.dialog.component.html',
  styleUrls: ['./edit.user.dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    // @Inject(null) public data: IInviteUser
  ) { }

  ngOnInit(): void {

  }

}
