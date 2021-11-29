import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-log-par-admin',
  templateUrl: './log-par-admin.component.html',
  styleUrls: ['./log-par-admin.component.css']
})
export class LogParAdminComponent implements OnInit {
  logAdmin:any;
  acteur="ADMIN";
  id =1;

  constructor(private service : UsersService) { }

  ngOnInit(): void {
    this.logParAdmin();
  }
  logParAdmin(){
    this.acteur=this.acteur
    this.id=this.id
    this.service.getLogParActeur(this.id,this.acteur).subscribe((data)=>{
      this.logAdmin= data;
      console.log(data)
    })
    
  }

}
