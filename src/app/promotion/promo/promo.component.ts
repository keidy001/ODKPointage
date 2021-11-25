import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  constructor(private service: UsersService, public router:Router) { }
  addPromotion = new FormGroup({ 
    annee : new FormControl(''),
    nom : new FormControl(''),
    dateDebut : new FormControl(''),
    dateFin : new FormControl(''),
    totalApprenants : new FormControl(''),
    nombreHommes : new FormControl(''),
    nombreFemmes : new FormControl(''),
    horaireDebutJournee : new FormControl(''),
    horaireFinJournee : new FormControl(''),
  }
  );

  ngOnInit(): void {
  }
  SaveData(){
    // console.log(this.addStudent.value);
    this.service.Addpromo(this.addPromotion.value).subscribe((result)=>{
      console.log(result)
      this.router.navigateByUrl("listepromo")


    })
  }

}
