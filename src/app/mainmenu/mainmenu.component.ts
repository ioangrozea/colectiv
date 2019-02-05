import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {


  btnClickMitarbeiter = function() {
    this.router.navigateByUrl('');
    this.router.navigateByUrl('/mitarbeiter-profile');
  }

  btnClickLogin = function() {
    this.router.navigateByUrl('');
    this.router.navigateByUrl('/login');
  }

  btnClickProfile = function() {
    this.router.navigateByUrl('');
    this.router.navigateByUrl('/profile');
  }

  btnClickReport = function() {
    this.router.navigateByUrl('');
    this.router.navigateByUrl('/report');
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
