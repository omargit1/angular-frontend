import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    DetailUserComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
