import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
loginData : any;
  constructor(private router:Router, private uerinfo:LoginComponent) { }

  ngOnInit(): void {
    //this.loginData = JSON.parse(localStorage.getItem("isLogin"));
    console.log(this.loginData);
  }

}
