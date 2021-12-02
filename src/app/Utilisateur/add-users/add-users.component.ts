import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  userngForm: NgForm;
  formuser: FormGroup;
  login:any;
  promotions:any;

  submitted = false;
  constructor(
    private service : UsersService, 
    private router : Router,
    public  route: ActivatedRoute,
    public formBulder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.promotions = this.afficherPromotions();


<<<<<<< HEAD
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
=======
    this.formuser = this.formBulder.group({
>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165

      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      genre: ['', Validators.required],
      adresse: ['', Validators.required],
      login: ['', Validators.required],
      profile: ['', Validators.required],
      telephone: ['', Validators.required],
      etat: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePass: ['', [Validators.required, Validators.minLength(6)]],
      

      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
    

  }

   afficherPromotions(){
    this.service.getAllPromotions().subscribe(
      (data)=>{
        
        this.promotions = data;
        console.log(this.promotions);
      }
    )
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



  get f() { return this.formuser.controls; }




  ajouter_user(fg : FormGroup){
    this.submitted = true;
    


    // stop here if form is invalid
    if (this.formuser.invalid) {
        return;
    }

    var obj: { [id: string]: any} = {};
     
    obj.id = fg.value.profile; 
    fg.value.profile = obj;
    fg.value.userId =this.loginData.id
     
   console.log(JSON.stringify(fg.value));

   this.service.addAdmin(fg.value).subscribe(
     
     (data)=>{
       this.router.navigateByUrl("/listUsers");
     
       console.log("hello world" +data);         
     }
   )
    
  }

>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}
