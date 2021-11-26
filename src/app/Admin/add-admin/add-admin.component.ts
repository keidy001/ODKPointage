import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/services/serviceInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  adminData: any;
  ngForm: FormGroup;
  user: any;
  id: any;
  chaine : string;

  constructor(public service: UsersService, public  route: ActivatedRoute, public router : Router) { }

  ngOnInit(): void {

    console.log(this.adminData);

  }

  ajouterAdmin(addForm: NgForm){
    //this.chaine = addForm.value.profile;
    var obj: { [id: string]: any} = {};

     obj.id = addForm.value.profile; 
     addForm.value.profile = obj;

    console.log(JSON.stringify(addForm.value));
   
    this.service.addAdmin(addForm.value).subscribe(
      
      (data)=>{
        console.log("hello world" +data)
      }
    )
  }

}
