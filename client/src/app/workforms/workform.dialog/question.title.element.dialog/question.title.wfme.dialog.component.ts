import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { IElementQuestionTitleDialogComponent } from "../interface/dialog.interface";

@Component({
  selector: 'question-title-wfme-dialog-component',
  templateUrl: './question.title.wfme.dialog.component.html',
  styleUrls: ['./question.title.wfme.dialog.component.scss']
})
export class ElementQuestionTitleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ElementQuestionTitleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IElementQuestionTitleDialogComponent
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
