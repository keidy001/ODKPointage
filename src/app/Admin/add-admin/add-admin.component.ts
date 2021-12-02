import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  formgroup: FormGroup;
  user: any;
  id: any;
  chaine : string;
  loginData: any;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  userId:any;
  userngForm: NgForm;
>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
  
  submitted = false;

  constructor(
    public service: UsersService,
    public  route: ActivatedRoute,
    public router : Router,
    public formBuilder: FormBuilder) { }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   email: [null, [Validators.required, Validators.email]],
    //   nom:[null, [Validators.required]],
    //   prenom:[null, [Validators.required]],

<<<<<<< HEAD
=======

    // })

    // this.userId =  this.userngForm.value.userId;
    // console.log(this.userId);
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f

    // })

    this.loginData=JSON.parse(localStorage["isLogin"]);

    this.formgroup = this.formBuilder.group({
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      

>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
      //confirmPassword: ['', Validators.required],
      //acceptTerms: [false, Validators.requiredTrue] //Checkbox For accept conditions 
  },);
  }


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
  get f() { return this.formgroup.controls; }
  ajouterAdmin(addForm: NgForm){
    //this.chaine = addForm.value.profile;
    if (addForm.valid){
      var obj: { [id: string]: any} = {};
     
       obj.id = addForm.value.profile; 
       addForm.value.profile = obj;
  
      console.log(JSON.stringify(addForm.value));
  
      this.service.addAdmin(addForm.value).subscribe(
<<<<<<< HEAD
        
        (data)=>{
          this.router.navigateByUrl("listAdmins");
        
          console.log("hello world" +data);         
        }
      )
    }else{
      console.log("Not valid...")
    }
  }

  hello(){
    this.submitted = true;
=======
        
        (data)=>{
          this.router.navigateByUrl("listAdmins");
        
          console.log("hello world" +data);         
        }
      )
    }else{
      console.log("Not valid...")
    }
  }

  hello(){
    this.submitted = true;
=======
  // ajouterAdmin(addForm: NgForm){
  //   //this.chaine = addForm.value.profile;
  //   if (addForm.valid){
  //     var obj: { [id: string]: any} = {};

     
  //      obj.id = addForm.value.profile; 
  //      addForm.value.profile = obj;
  
  //     console.log(JSON.stringify(addForm.value));
  
  //     this.service.addAdmin(addForm.value).subscribe(
        
  //       (data)=>{
  //         this.router.navigateByUrl("listAdmins");
  //         this.userId =  this.userngForm.value.userId;
  //         console.log(this.userId);
        
  //         console.log("hello world" +data);         
  //       }
  //     )
  //   }else{
  //     console.log("Not valid...")
  //   }
  // }









  get f() { return this.formgroup.controls; }




  ajouter_admin(fg : FormGroup){
    this.submitted = true;
    

>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f

    // stop here if form is invalid
    if (this.formgroup.invalid) {
        return;
    }

<<<<<<< HEAD
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formgroup.value, null, 4));
=======
<<<<<<< HEAD
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formgroup.value, null, 4));
=======
    var obj: { [id: string]: any} = {};
     
    obj.id = fg.value.profile; 
    fg.value.profile = obj;
     fg.value.userId =this.loginData.id
     
   console.log(JSON.stringify(fg.value));

   this.service.addAdmin(fg.value).subscribe(
     
     (data)=>{
       this.router.navigateByUrl("/listAdmins");
     
       console.log("hello world" +data);         
     }
   )
    
>>>>>>> 368b21bd76ce5c7832f661e6cf897db3841a7165
>>>>>>> 0ffe7f28ad1fc09f6c9089ad1e55dc0542972b9f
  }
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}
}
