import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListPointageComponent } from '../PointageAdministrateur/list-pointage/list-pointage.component';
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
    this.service.login1(form.value["username"],form.value["password"]).subscribe((res)=>{
      if(res){

        console.log(res);
        this.loginInfo = res;
        this.router.navigate(["/accueil"]);
        localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
      }else{
        this.service.login2(form.value["username"],form.value["password"]).subscribe((res)=>{
          if(res){
            console.log(res);
            this.loginInfo = res;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
            localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
            let userInfo = JSON.parse(localStorage['isLogin']);
            let data1 ={
             id:userInfo.id,
             Type:userInfo.Type,}
             console.log(data1)
          this.service.userPOintage(data1).subscribe((data)=>{
            
          })
            this.router.navigate(["/userSpace"]);
            
            
<<<<<<< HEAD
=======
=======
            this.router.navigate(["/userSpace"]);
            localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
          }else {
            this.router.navigate(["/login"])
            console.log("login non connecter");
          
        } 
        
      })
    }
  })
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f

 

=======
>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
}
