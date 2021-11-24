import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  prenom: any;
  nom: any; 
  adresse: any; 
  etat: any; 
  email: any; 
  telephone: any; 
  profile: any;  
  login: any; 
  motDePass: any;   
  constructor(private service: UsersService) { }
  // addAdmin= new FormGroup({
  //   prenom: new FormControl(''),
  //   nom: new FormControl(''),
  //   adresse: new FormControl(''),
  //   etat: new FormControl(''),
  //   email: new FormControl(''),
  //   telephone: new FormControl(''),
  //   profile: new FormControl(),
  //   login: new FormControl(''),
  //   motDePass: new FormControl('')
  // })

  ngOnInit(): void {
  }
   AjouAdmin(){
     let addAdmin = {
      prenom : this.nom,
      nom    : this.prenom, 
      adresse: this.adresse, 
      etat: this.etat, 
      email: this.email, 
      telephone: this.telephone, 
      profile: {
        id:this.profile},  
      login: this.login, 
      motDePass: this.motDePass, 
     }
   this.service.AddAdmin(addAdmin).subscribe((data)=>{
     console.log("yyyyyyyy"+data);
     
    })
  
   }
}
