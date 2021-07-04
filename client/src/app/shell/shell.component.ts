import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

import { AuthenticationService, CredentialsService } from '@app/auth';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  private routeDataSub: Subscription = null;
  private routeData: Data = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private media: MediaObserver,
    private location: Location
  ) {}

  ngOnInit() {
    this.routeDataSub = this.route.data.subscribe(data => {
      this.routeData = data
    });
  }

  ngOnDestroy() {
    this.routeDataSub.unsubscribe();
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  navigate_Back() {
    this.location.back();
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  get isHideNavigation(): boolean {
    return this.routeData.isHideNavigation;
  }
}
