import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Nav } from './nav/nav';
import { Home } from './home/home';
import { ErrorPage } from './error/error';
import { Contact } from './contact/contact';
import { Team } from './team/team';
import { Animals } from './animals/animals';

@NgModule({
  declarations: [App, Nav, Home, ErrorPage, Contact, Team, Animals],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
