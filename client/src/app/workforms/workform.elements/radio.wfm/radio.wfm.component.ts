import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'radio-wfm',
  templateUrl: './radio.wfm.component.html',
  styleUrls: ['../../global.workforms.component.scss']
})
export class RadioWorkformComponent implements OnInit {
  question: string;

  ngOnInit(): void {

  }

  set Question(question: string) {
    this.question = question;
  }

}
