import {Component, Inject, OnInit} from '@angular/core';

export interface WorkflowElement {
  workflowId: string;
  username: string;
  groupId: string;
  createdAt: string;
  isActive: boolean;
  isAdmin: boolean;
}

export interface WorkflowDialog {
  animal: string;
  name: string;
}

const ELEMENT_DATA: WorkflowElement[] = [
  {workflowId: '010101', username: 'william', groupId: "user group", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {workflowId: '010101', username: 'william', groupId: "user group", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {workflowId: '010101', username: 'william', groupId: "user group", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {workflowId: '010101', username: 'william', groupId: "user group", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {workflowId: '010101', username: 'william', groupId: "user group", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {workflowId: '010101', username: 'william', groupId: "user group", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {workflowId: '010101', username: 'william', groupId: "user group", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {workflowId: '010101', username: 'william', groupId: "user group", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {workflowId: '010101', username: 'william', groupId: "user group", createdAt: "01/01/2021", isActive: true, isAdmin: false},
];

@Component({
  selector: 'app-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss', '../global.scss']
})
export class WorkflowsComponent implements OnInit {
  displayedColumns: string[] = ['workflowId', 'username', 'groupId', 'createdAt', 'isActive', 'isAdmin'];
  dataSource = ELEMENT_DATA;
  animal: string;
  name: string;

  constructor() {}

  ngOnInit(): void {
  }

}
