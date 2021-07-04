import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TitleWorkformComponent } from '../../workform.elements/title.wfm/title.wfm.component';
import { TextWorkformComponent } from '../../workform.elements/text.wfm/text.wfm.component';
import { CheckWorkformComponent } from '../../workform.elements/check.wfm/check.wfm.component';
import { RadioWorkformComponent } from '../../workform.elements/radio.wfm/radio.wfm.component';

import { FormTitleDialogComponent } from '../../workform.dialog/title.form.dialog/title.wfm.dialog.component';
import { ElementQuestionTitleDialogComponent } from '../../workform.dialog/question.title.element.dialog/question.title.wfme.dialog.component';

@Component({
  selector: 'workform-editor',
  templateUrl: './workform.editor.component.html',
  styleUrls: ['./workform.editor.component.scss', '../../global.workforms.component.scss'],
})
export class WorkformEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('gridFormTitle', { read: ViewContainerRef }) gridFormTitle: ViewContainerRef;
  @ViewChild('gridFormMain', { read: ViewContainerRef }) gridFormMain: ViewContainerRef;

  @ViewChild(TextWorkformComponent) textWfm: TextWorkformComponent;

  previousClickedComponentRef: any;
  previousClickedElement: any;
  formTitle: string;

  constructor(private resolver: ComponentFactoryResolver, public dialog: MatDialog) {
    this.previousClickedElement = null;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const titleFactory: ComponentFactory<TitleWorkformComponent> = this.resolver.resolveComponentFactory(
      TitleWorkformComponent
    );
    const componentRef = this.gridFormTitle.createComponent(titleFactory);

    // Open Title Dialog
    const dialogRef = this.dialog.open(FormTitleDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { title: '' },
    });

    dialogRef.afterClosed().subscribe((formTitle) => {
      componentRef.instance.Title = formTitle;
    });
  }

  // Click: Form Item
  onFormItemClick(componentRef: ComponentRef<any>, event: any): void {
    if (this.previousClickedComponentRef != null && this.previousClickedComponentRef == componentRef) {
      this.previousClickedComponentRef.location.nativeElement.children[0].classList.add('form-item-hover');
      this.previousClickedComponentRef.location.nativeElement.children[0].classList.remove('form-item-selected');
      this.previousClickedComponentRef = null;
      return;
    }

    componentRef.location.nativeElement.children[0].classList.add('form-item-selected');
    componentRef.location.nativeElement.children[0].classList.remove('form-item-hover');

    if (this.previousClickedComponentRef == null) {
      this.previousClickedComponentRef = componentRef;
      return;
    }

    this.previousClickedComponentRef.location.nativeElement.children[0].classList.add('form-item-hover');
    this.previousClickedComponentRef.location.nativeElement.children[0].classList.remove('form-item-selected');
    this.previousClickedComponentRef = componentRef;
  }

  // Click: Text Component
  createTextComponent() {
    // Open Component Title Dialog
    const dialogRef = this.dialog.open(ElementQuestionTitleDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { question: '' },
    });

    dialogRef.afterClosed().subscribe((questionTitle) => {
      if (questionTitle) {
        const factory: ComponentFactory<TextWorkformComponent> = this.resolver.resolveComponentFactory(
          TextWorkformComponent
        );
        const componentRef = this.gridFormMain.createComponent(factory);

        componentRef.location.nativeElement.addEventListener('click', this.onFormItemClick.bind(this, componentRef));
        componentRef.instance.Question = questionTitle;
      }
    });
  }

  // Click: Checkbox Component
  createCheckComponent() {
    // Open Component Title Dialog
    const dialogRef = this.dialog.open(ElementQuestionTitleDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { question: '' },
    });

    dialogRef.afterClosed().subscribe((questionTitle) => {
      if (questionTitle) {
        const factory: ComponentFactory<CheckWorkformComponent> = this.resolver.resolveComponentFactory(
          CheckWorkformComponent
        );
        const componentRef = this.gridFormMain.createComponent(factory);

        componentRef.location.nativeElement.addEventListener('click', this.onFormItemClick.bind(this, componentRef));
        componentRef.instance.Question = questionTitle;
      }
    });
  }

  // Click: Radio Component
  createRadioComponent() {
    // Open Component Title Dialog
    const dialogRef = this.dialog.open(ElementQuestionTitleDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { question: '' },
    });

    dialogRef.afterClosed().subscribe((questionTitle) => {
      if (questionTitle) {
        const factory: ComponentFactory<RadioWorkformComponent> = this.resolver.resolveComponentFactory(
          RadioWorkformComponent
        );
        const componentRef = this.gridFormMain.createComponent(factory);

        componentRef.location.nativeElement.addEventListener('click', this.onFormItemClick.bind(this, componentRef));
        componentRef.instance.Question = questionTitle;
      }
    });
  }
}
