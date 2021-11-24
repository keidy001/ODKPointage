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

  constructor(private service: UsersService, public router: Router) { }

  ngOnInit(): void {
  }
  onLogin(form :NgForm){
    this.service.login(form.value["username"],form.value["password"]).subscribe((res)=>{
      if(res){
        console.log(res);
        this.router.navigate(["/accueil"])
      }else{
        this.router.navigate(["/login"])
        console.log("login non connecter");
      }
     
    })
  }

}
