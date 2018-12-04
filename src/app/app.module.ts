import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MitarbeiterProfileComponent } from './mitarbeiter-profile/mitarbeiter-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillProfileComponent } from './profile/skill-profile/skill-profile.component';
import { ReportComponent } from './report/report.component';
import {RouterModule, Routes} from '@angular/router';
import { ProjectComponent } from './profile/project/project.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { CardComponent } from './profile/card/card.component';

const routes: Routes = [
  {path: '', component: ReportComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'mitarbeiter-profile', component: MitarbeiterProfileComponent},
  {path: 'report', component: ReportComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MitarbeiterProfileComponent,
    ProfileComponent,
    SkillProfileComponent,
    ReportComponent,
    ProjectComponent,
    MainmenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
