import { AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'text-wfm',
  templateUrl: './text.wfm.component.html',
  styleUrls: ['../../global.workforms.component.scss']
})
export class TextWorkformComponent implements OnInit, AfterViewInit {
  question: string;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

  onFormItemClick(): void {

  }

  set Question(question: string) {
    this.question = question;
  }

}
