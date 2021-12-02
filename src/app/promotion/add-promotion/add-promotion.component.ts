import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {
  adminData: any;
  ngForm: FormGroup;
  user: any;
  id: any;
  chaine : string;
  loginData: any;


  constructor( 
    public service: UsersService,
    public  route: ActivatedRoute,
    public router : Router) { }

  ngOnInit(): void {

    console.log(this.adminData);
    this.loginData=JSON.parse(localStorage["isLogin"]);
  }

  ajouterPromotion(addForm: NgForm){
    //this.chaine = addForm.value.profile;
    // var obj: { [id: string]: any} = {};
   
    //  obj.id = addForm.value.profile; 
    //  addForm.value.profile = obj;

    // console.log(JSON.stringify(addForm.value));

    this.service.addPromotion(addForm.value).subscribe(
      
      (data)=>{
        this.router.navigateByUrl("listPromotion");
      
        console.log("hello world" +data);
       
        
        
      }
    )
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}
