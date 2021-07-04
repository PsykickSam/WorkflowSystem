import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditUserDialogComponent } from './users.dialog/edit.user.dialog/edit.user.dialog.component';
import { InviteUserDialogComponent } from './users.dialog/invite.user.dialog/invite.user.dialog.component';
import { NewUserDialogComponent } from './users.dialog/new.user.dialog/new.user.dialog.component';
import { DeleteUserDialogComponent } from './users.dialog/delete.user.dialog/delete.user.dialog.component';

export interface UserElement {
  name: string;
  username: string;
  email: string;
  createdAt: string;
  isActive: boolean;
  isAdmin: boolean;
}

const ELEMENT_DATA: UserElement[] = [
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../global.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'email', 'createdAt', 'isActive', 'isAdmin'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick_InviteUserButton(): void {
    const dialogRef = this.dialog.open(InviteUserDialogComponent, {
      width: '400px',
      data: { email: '' },
    });
  }

  onClick_NewUserButton(): void {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '600px',
      data: { email: '' },
    });
  }

  onClick_EditUserButton(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '400px',
      data: { email: '' },
    });
  }

  onClick_DeleteUserButton(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '400px',
      data: { email: '' },
    });
  }

}
