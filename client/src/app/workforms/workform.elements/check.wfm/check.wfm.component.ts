import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'check-wfm',
  templateUrl: './check.wfm.component.html',
  styleUrls: ['../../global.workforms.component.scss']
})
export class CheckWorkformComponent implements OnInit {
  question: string;

  ngOnInit(): void {

  }

  set Question(question: string) {
    this.question = question;
  }

}
