import { Component,NgModule, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  btnClickLogin = function() {
    this.router.navigateByUrl('/profile');
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
