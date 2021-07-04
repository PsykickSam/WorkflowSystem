import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'edit-wfwe-dialog-component',
  templateUrl: './edit.wfwe.dialog.component.html',
  styleUrls: ['./edit.wfwe.dialog.component.scss']
})
export class EditBlockLineDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditBlockLineDialogComponent>,
  // @Inject(null) public data: DialogData
  ) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
