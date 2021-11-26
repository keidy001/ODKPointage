import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers: any;

  constructor(public service: UsersService) { }

  ngOnInit(): void {
    this.listerUsers();
  }

  listerUsers(){
    this.service.getAllUsers().subscribe((data)=>{
      console.log(data);
      return this.listUsers=data;

    })
  }

}
