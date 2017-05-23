import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded row">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a data-method="delete" href="/users/sign_out" class="nav-link" rel="nofollow">Sign Out</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const queryParams = (<any>window).decodeURIComponent((<any>location).search);
    this.router.navigate([queryParams.replace("?redirect_to=", "")]);
  }
}
