import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

export interface UserElement {
  name: string;
  username: string;
  email: string;
  createdAt: string;
  isActive: boolean;
  isAdmin: boolean;
}

export interface FormElement {
  formId: string;
  formTitle: string;
  createdAt: string;
}

const ELEMENT_DATA_USERS: UserElement[] = [
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
  {name: 'William', username: 'william', email: "william@gmail.com", createdAt: "01/01/2021", isActive: true, isAdmin: false},
];

const ELEMENT_DATA_REQUESTS: FormElement[] = [
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
  {formId: '#110R2', formTitle: 'Product Form', createdAt: "01/01/2021"},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumnsUsers: string[] = ['name', 'username', 'email', 'createdAt', 'isActive', 'isAdmin'];
  displayedColumnsRequests: string[] = ['formId', 'formTitle', 'createdAt'];
  dataSourceUsers = ELEMENT_DATA_USERS;
  dataSourceRequests = ELEMENT_DATA_REQUESTS;

  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
