import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmationDialog/confirmation-dialog.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
listAdmin:any =[];
loginData : any;
searchText: any;
userId: any;

  constructor(private serviceAdmin:UsersService, private confirmationDialogService: ConfirmationDialogService) {

   }
   
  ngOnInit(): void {
   this.listerAdmin();
   this.loginData = JSON.parse(localStorage["isLogin"]);

  }



  public openConfirmationDialog(id:any) {
    this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
    .then((confirmed) => 

    this.serviceAdmin.deleteAdmin(id, this.userId).subscribe((data)=>{
      console.log(data); 
      this.listerAdmin();
    }))
    .catch(
      () => 
      console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
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
