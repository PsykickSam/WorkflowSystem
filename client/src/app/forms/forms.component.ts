import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

export interface FormElement {
  draftId: string;
  formTitle: string;
  createdAt: string;
}

const ELEMENT_DATA: FormElement[] = [
  {draftId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {draftId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {draftId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {draftId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {draftId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {draftId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {draftId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {draftId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {draftId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {draftId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
];

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss', '../global.scss'],
})
export class FormsComponent implements OnInit {
  displayedColumns: string[] = ['draftId', 'formTitle', 'createdAt'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {
  }
}
