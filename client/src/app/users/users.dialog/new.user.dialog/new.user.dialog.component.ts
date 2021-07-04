import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new.user.dialog',
  templateUrl: './new.user.dialog.component.html',
  styleUrls: ['./new.user.dialog.component.scss']
})
export class NewUserDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewUserDialogComponent>,
    // @Inject(null) public data: INewUser
    ) { }

  ngOnInit(): void {
  }

}
