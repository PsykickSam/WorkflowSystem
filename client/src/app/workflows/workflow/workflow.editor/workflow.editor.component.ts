import { ComponentFactory, ComponentRef, Inject } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { BlockWorkflowComponent } from '../../workflow.elements/block.wfw/block.wfw.component';
import { LineWorkflowComponent } from '../../workflow.elements/line.wfw/line.wfw.component';

import { EditBlockLineDialogComponent } from '../../workflow.dialog/edit.element.dialog/edit.wfwe.dialog.component';

@Component({
  selector: 'app-workflow.editor',
  templateUrl: './workflow.editor.component.html',
  styleUrls: ['./workflow.editor.component.scss', '../../global.workflows.component.scss'],
})
export class WorkflowEditorComponent implements OnInit {
  @ViewChild('gridFlowMain', { read: ViewContainerRef }) gridFlowMain: ViewContainerRef;

  previousClickedBlockComponentRef: ComponentRef<any> = null;
  previousClickedLineComponentRef: ComponentRef<any> = null;
  previousClickedElement: any;

  constructor(private resolver: ComponentFactoryResolver, public dialog: MatDialog) {}

  ngOnInit(): void {}

  // Click
  onFlowItemClick(componentBlockRef: ComponentRef<any>, componentLineRef: ComponentRef<any>, event: any): void {
    if (this.previousClickedBlockComponentRef != null && this.previousClickedBlockComponentRef == componentBlockRef) {
      this.previousClickedBlockComponentRef.location.nativeElement.children[0].classList.remove('flow-item-selected');
      this.previousClickedBlockComponentRef = null;
      this.previousClickedLineComponentRef = null;
      return;
    }

    componentBlockRef.location.nativeElement.children[0].classList.add('flow-item-selected');

    if (this.previousClickedBlockComponentRef == null) {
      this.previousClickedBlockComponentRef = componentBlockRef;
      this.previousClickedLineComponentRef = componentLineRef;
      return;
    }

    this.previousClickedBlockComponentRef.location.nativeElement.children[0].classList.remove('flow-item-selected');
    this.previousClickedBlockComponentRef = componentBlockRef;
    this.previousClickedLineComponentRef = componentLineRef;
  }

  createBlockLineComponent(): void {
    const factoryBlock: ComponentFactory<BlockWorkflowComponent> = this.resolver.resolveComponentFactory(
      BlockWorkflowComponent
    );
    const factoryLine: ComponentFactory<LineWorkflowComponent> = this.resolver.resolveComponentFactory(
      LineWorkflowComponent
    );

    const componentBlockRef = this.gridFlowMain.createComponent(factoryBlock);
    const componentLineRef = this.gridFlowMain.createComponent(factoryLine);

    componentBlockRef.location.nativeElement.addEventListener(
      'click',
      this.onFlowItemClick.bind(this, componentBlockRef, componentLineRef)
    );
  }

  editBlockLineComponent(): void {
    if (this.previousClickedBlockComponentRef != null) {
      const dialogRef = this.dialog.open(EditBlockLineDialogComponent, {
        width: '400px',
        data: {},
      });

      // dialogRef.afterClosed().subscribe((result) => {
      //   console.log('The dialog was closed');
      // });
    }
  }

  removeBlockLineComponent(): void {
    if (this.previousClickedBlockComponentRef != null) {
      const indexLine = this.gridFlowMain.indexOf(this.previousClickedLineComponentRef.hostView);
      const indexBlock = this.gridFlowMain.indexOf(this.previousClickedBlockComponentRef.hostView);

      this.gridFlowMain.remove(indexLine);
      this.gridFlowMain.remove(indexBlock);

      this.previousClickedLineComponentRef = null;
      this.previousClickedBlockComponentRef = null;
    }
  }
}

// @Component({
//   selector: 'edit-wfwe-dialog-component',
//   templateUrl: '../../workflow.dialog/edit.element.dialog/edit.wfwe.dialog.component.html',
// })
// export class EditBlockLineComponentDialog {
//   constructor(
//     public dialogRef: MatDialogRef<EditBlockLineComponentDialog>,
//   // @Inject(null) public data: DialogData
//   ) {}

//   // onNoClick(): void {
//   //   this.dialogRef.close();
//   // }
// }
