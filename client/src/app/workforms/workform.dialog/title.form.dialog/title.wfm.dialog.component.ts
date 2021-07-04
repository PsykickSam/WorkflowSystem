import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IFormTitleDialogComponent } from "../interface/dialog.interface";

@Component({
  selector: 'title-wfm-dialog-component',
  templateUrl: './title.wfm.dialog.component.html',
  styleUrls: ['./title.wfm.dialog.component.scss']
})
export class FormTitleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FormTitleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFormTitleDialogComponent
  ) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
