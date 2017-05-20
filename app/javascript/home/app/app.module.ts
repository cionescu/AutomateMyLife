import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { CardComponent } from './card/card.component';
import { CreateCardComponent } from './card/create-card.component';

import { NotificationService } from './notification/notification.service';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotificationComponent,
    CardComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule
  ],
  providers: [
    NotificationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
