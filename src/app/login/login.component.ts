import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginInfo:any;
  constructor(private service: UsersService, public router: Router) { }

  ngOnInit(): void {
  }
  onLogin(form :NgForm){
    if(!form.value.username&&form.value.password){
    this.service.login1(form.value["username"],form.value["password"]).subscribe((res)=>{
      if(res){

        console.log(res);
        this.loginInfo = res;
        this.router.navigate(["/accueil"]);
        localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
      }else{
        this.router.navigate(["/login"])
        console.log("login non connecter");
      }
    } 
    )
  
    }
    else{
      this.service.login2(form.value["username"],form.value["password"]).subscribe((res)=>{
        if(res){
  
          console.log(res);
          this.loginInfo = res;
          this.router.navigate(["/userSpace"]);
          localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
        }else if(form.value.typeCpt=="Utilisateur")
        {
          this.router.navigate(["/login"])
          console.log("login non connecter");
        }
      } 
      )
    }
}
}
