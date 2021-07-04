import { Component, OnInit } from '@angular/core';

export interface FormElement {
  formId: string;
  formTitle: string;
  createdAt: string;
  btnDelete: boolean;
}

const ELEMENT_DATA: FormElement[] = [
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021", btnDelete: true},
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021", btnDelete: true},
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021", btnDelete: false},
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021", btnDelete: false},
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021", btnDelete: true},
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021", btnDelete: true},
];

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss', '../global.scss'],
})
export class RequestsComponent implements OnInit {
  displayedColumns: string[] = ['formId', 'formTitle', 'createdAt', "btnDelete"];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {
  }
}
