import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-liste-promo',
  templateUrl: './liste-promo.component.html',
  styleUrls: ['./liste-promo.component.css']
})
export class ListePromoComponent implements OnInit {
  listPromo:any =[]

  constructor(private servicePromo: UsersService) { }

  ngOnInit(): void {
    this.listerPromo();
  }
  listerPromo(){
    this.servicePromo.getAllPromo().subscribe((result)=>{
      return this.listPromo=result;
    })
  }
  deletepromo(id : any):void{
  this.servicePromo.deletePromo(id).subscribe((data)=>{
    this.listerPromo();
  });
  }

}
