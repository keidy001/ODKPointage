import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers: any;
  loginData:any;
  constructor(public service: UsersService) { }

  ngOnInit(): void {
    this.listerUsers();
    this.loginData = JSON.parse(localStorage["isLogin"]);
    
  }

  listerUsers(){
    this.service.getAllUsers().subscribe((data)=>{
      console.log(data);
      return this.listUsers=data;

    })
  }
  deleteUser(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){
     let userId = this.loginData.id;
   this.service.deleteUser(id, userId).subscribe((data)=>{
     
     this.listerUsers();
   });
  }
   
  }

}
