import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MitarbeiterProfileComponent} from './mitarbeiter-profile/mitarbeiter-profile.component';
import {ProfileComponent} from './profile/profile.component';
import {SkillProfileComponent} from './profile/skill-profile/skill-profile.component';
import {ReportComponent} from './report/report.component';
import {ProjectComponent} from './profile/project/project.component';
import {MainmenuComponent} from './mainmenu/mainmenu.component';
import {CardComponent} from './profile/card/card.component';
import {EditMitarbeiterComponent} from './mitarbeiter-profile/edit-mitarbeiter/edit-mitarbeiter.component';
import {ContentService} from './shared/ContentService';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';


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
    CardComponent,
    EditMitarbeiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
