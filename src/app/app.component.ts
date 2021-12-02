import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GuardGuard } from './guard.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor( 
    private route : Router,
    private guard:GuardGuard,
    ){}
  title = 'OdkPointage';
loginData:any;
stateRoute:any;
  ngOnInit(): void {
    
    if(localStorage["isLogin"]){
    this.loginData=JSON.parse(localStorage["isLogin"]);
  }
    

  }
  logOut(){
      localStorage.removeItem('isLogin');
    this.route.navigateByUrl('/');
  }
}
