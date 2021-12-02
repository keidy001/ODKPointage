import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  user: any;
  loginData:any;
  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.loginData = localStorage['isLogin'];
    this.user=JSON.parse(localStorage.getItem("isLogin") || '{}');
    console.log(this.user);
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}

}
