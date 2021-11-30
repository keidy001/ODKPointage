import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  // ngForm: FormGroup;
  // adminData: any;
  // user: any;
  // id: any;
  // chaine : string;
  loginData: any;

  prenom: any;
  nom: any;
  email:any;
  genre:any;
  telephone:any;
  password:any;
  Type:any;
  adresse:any;
  promotion:any;
  etat:any;
  login:any;
  promotions:any;

  constructor(
    private service : UsersService, 
    private router : Router,
    public  route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.promotions = this.afficherPromotions();
    

  }
  test(){

  }
  ajouterUsers(){
   
 
    let userData = {
          prenom : this.prenom,
          nom: this.nom,
          email: this.email,
          genre: this.genre,
          telephone:this.telephone,
          motDePass:this.password,
          Type:this.Type,
          adresse:this.adresse,
          promotion:{
            id:this.promotion
          },
          etat:this.etat,
          login:this.login,
          userId:this.loginData.id

    }
   
    this.service.addUsers(userData).subscribe(
      (data)=>{
        this.router.navigateByUrl("listUsers");
        console.log("hello world" +data);
       
        
        
      }
    )

  }

   afficherPromotions(){
    this.service.getAllPromotions().subscribe(
      (data)=>{
        
        this.promotions = data;
        console.log(this.promotions);
      }
    )
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}
