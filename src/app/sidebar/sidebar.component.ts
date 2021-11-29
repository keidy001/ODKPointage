import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( 
    private route : Router,
    
    ){}

loginData:any;
stateRoute:any;
  ngOnInit(): void {
   
    console.log('ok'+this.stateRoute);
    if(localStorage["isLogin"]){
    this.loginData=JSON.parse(localStorage["isLogin"]);
  }
  }
}