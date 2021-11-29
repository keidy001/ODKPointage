import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.css']
})
export class UserSpaceComponent implements OnInit {
  listUser: any;

  constructor(public service : UsersService) { }

  ngOnInit(): void {
    this.service.afficherListPointage().subscribe(
      (data)=>{
        console.log(data);
        this.listUser = data
      }
    )
  }

}
