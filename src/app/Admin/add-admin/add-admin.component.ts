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
  loginData: any;

  constructor(
    public service: UsersService,
    public  route: ActivatedRoute,
    public router : Router,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]

    console.log(this.adminData);
    this.loginData=JSON.parse(localStorage["isLogin"]);

  }

  
  logOut(){
    localStorage.removeItem('isLogin');
  this.router.navigateByUrl('/');
}

registerForm!: FormGroup;
submitted = false;


// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

    onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
      this.submitted = false;
      this.registerForm.reset();
    }
}
