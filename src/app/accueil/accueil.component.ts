import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
loginData : any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginData = JSON.parse(localStorage["isLogin"]);
    console.log(this.loginData);
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}
