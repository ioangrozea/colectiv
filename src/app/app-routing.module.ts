import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ReportComponent} from './report/report.component';
import {MitarbeiterProfileComponent} from './mitarbeiter-profile/mitarbeiter-profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'report', component: ReportComponent},
  {path: 'subordinates', component: MitarbeiterProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
