import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-liste-promotion',
  templateUrl: './liste-promotion.component.html',
  styleUrls: ['./liste-promotion.component.css']
})
export class ListePromotionComponent implements OnInit {
  listPromotion:any =[];
  loginData : any;
  constructor(private serviceAdmin:UsersService) { }

  ngOnInit(): void {
    this.listerPromotion();
    this.loginData = JSON.parse(localStorage["isLogin"]);
 
   }
 
   listerPromotion(){
     this.serviceAdmin.getAllPromotions().subscribe((data)=>{
       return this.listPromotion=data;
     })
   }
   deletePromotion(id:any):void{
     if(confirm("Voulez-vous supprimer ??")){
      let userId = this.loginData.id;
    this.serviceAdmin.deletePromotion(id, userId).subscribe((data)=>{
      console.log(data); 
      this.listerPromotion();
    });
   }
    
   }
  
 }