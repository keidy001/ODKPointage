import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
listAdmin:any =[];
loginData : any;
  constructor(private serviceAdmin:UsersService) {

   }
   
  ngOnInit(): void {
   this.listerAdmin();
   this.loginData = JSON.parse(localStorage["isLogin"]);

  }

  listerAdmin(){
    this.serviceAdmin.getAllAdmin().subscribe((data)=>{
      return this.listAdmin=data;
    })
  }
  deleteAdmin(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){
     let userId = this.loginData.id;
   this.serviceAdmin.deleteAdmin(id, userId).subscribe((data)=>{
     console.log(data); 
     this.listerAdmin();
   });
  }
   
  }
 
}
