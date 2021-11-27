import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor( 
    private route : Router,
    ){}
  title = 'OdkPointage';
loginData:any;
  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    if(this.loginData==null){
    
    }

  }
  logOut(){
      localStorage.removeItem('isLogin');
    this.route.navigateByUrl('/');
  }
}
