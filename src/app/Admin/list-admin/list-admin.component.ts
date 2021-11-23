import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
listAdmin:any =[]
  constructor(private serviceAdmin:UsersService) {

   }
   
  ngOnInit(): void {
   this.listerAdmin();
  }

  listerAdmin(){
    this.serviceAdmin.getAllAdmin().subscribe((data)=>{
      return this.listAdmin=data;
    })
  }
  deleteAdmin(id:any):void{
   this.serviceAdmin.deleteAdmin(id).subscribe((data)=>{
     console.log(data); 
     this.listerAdmin();
   });
   
  }
 
}
