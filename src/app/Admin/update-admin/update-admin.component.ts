import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {


  adminData: any;
  user: any;
  id: any;

  constructor(public service: UsersService,public  route: ActivatedRoute, public router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailAdmin(this.id).subscribe(data=>{
      console.log(data);
      this.adminData = data;
    })
    console.log(this.id);
  }
  onUpdate(){
    this.service.updateAdmin(this.adminData.id, this.adminData).subscribe(
      data=>{
        console.log(data);
      this.service.updateAdmin(this.id, this.adminData).subscribe(
        (data:any)=>{
        console.log(data);
        this.router.navigateByUrl("listAdmins");

      })
    })
  }




}
