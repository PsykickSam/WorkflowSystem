import { Component, OnInit } from '@angular/core';

export interface WorkformElement {
  workformId: string;
  username: string;
  createdAt: string;
  isActive: boolean;
}

export interface WorkformDialog {
  animal: string;
  name: string;
}

const ELEMENT_DATA: WorkformElement[] = [
  {workformId: '010101', username: 'william', createdAt: "01/01/2021", isActive: true},
  {workformId: '010101', username: 'william', createdAt: "01/01/2021", isActive: true},
  {workformId: '010101', username: 'william', createdAt: "01/01/2021", isActive: true},
  {workformId: '010101', username: 'william', createdAt: "01/01/2021", isActive: true},
  {workformId: '010101', username: 'william', createdAt: "01/01/2021", isActive: true},
  {workformId: '010101', username: 'william', createdAt: "01/01/2021", isActive: true},
  {workformId: '010101', username: 'william', createdAt: "01/01/2021", isActive: true},
  {workformId: '010101', username: 'william', createdAt: "01/01/2021", isActive: true},
  {workformId: '010101', username: 'william', createdAt: "01/01/2021", isActive: true},
];

@Component({
  selector: 'app-workforms',
  templateUrl: './workforms.component.html',
  styleUrls: ['./workforms.component.scss', '../global.scss']
})
export class WorkformsComponent implements OnInit {
  displayedColumns: string[] = ['workformId', 'username', 'createdAt', 'isActive'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
