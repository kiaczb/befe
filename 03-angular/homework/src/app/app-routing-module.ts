import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Animals } from './animals/animals';
import { Team } from './team/team';
import { Contact } from './contact/contact';
import { ErrorPage } from './error/error';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'team', component: Team },
  { path: 'animals', component: Animals },
  { path: '**', component: ErrorPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
