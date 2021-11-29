import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-log-par-super-admin',
  templateUrl: './log-par-super-admin.component.html',
  styleUrls: ['./log-par-super-admin.component.css']
})
export class LogParSuperAdminComponent implements OnInit {
  logAdmin:any;
  acteur="SUPERADMIN";
  id =1;

  constructor(private service : UsersService) { }

  ngOnInit(): void {
    this.logParSuperAdmin();
  }
  logParSuperAdmin(){
    this.acteur=this.acteur
    this.id=this.id
    this.service.getLogParActeur(this.id,this.acteur).subscribe((data)=>{
      this.logAdmin= data;
      console.log(data)
    })
    
  }

}
