import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardGuard } from '../guard.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   constructor( 
    private route : Router,
    private guard:GuardGuard,
    ){}

loginData:any;
stateRoute:any;
  ngOnInit(): void {
    this.stateRoute = this.guard.statRoute;
    console.log('ok'+this.stateRoute);
    if(localStorage["isLogin"]){
    this.loginData=JSON.parse(localStorage["isLogin"]);
  }
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.route.navigateByUrl('/');
}
}
