import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'title-wfm',
  templateUrl: './title.wfm.component.html',
  styleUrls: ['../../global.workforms.component.scss']
})
export class TitleWorkformComponent implements OnInit {
  title: string;

  ngOnInit(): void {
    this.title = "Form Title";
  }

  set Title(title: string) {
    this.title = title;
  }
}
