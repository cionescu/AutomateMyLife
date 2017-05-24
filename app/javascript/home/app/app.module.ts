import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { CardComponent } from './card/card.component';
import { CreateCardComponent } from './card/create-card.component';

import { NotificationService } from './notification/notification.service';
import { UserService } from './user/user.service';
import { CardService } from './card/card.service';

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
    HttpModule,
    FormsModule
  ],
  providers: [
    NotificationService,
    UserService,
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
