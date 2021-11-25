import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-promo',
  templateUrl: './update-promo.component.html',
  styleUrls: ['./update-promo.component.css']
})
export class UpdatePromoComponent implements OnInit {
  promoData: any;
  user: any;
  id: any;

  constructor(public service: UsersService, public  route: ActivatedRoute, public router : Router) { }
  // message: boolean=false;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailPromo(this.id).subscribe(data=>{
      console.log(data);
      this.promoData = data;
    })
    console.log(this.id);
  }
  onUpdate(){
    this.service.updatePromo(this.promoData.id, this.promoData).subscribe(
      data=>{
        console.log(data);
      this.service.updatePromo(this.id, this.promoData).subscribe(
        (data:any)=>{
        console.log(data);
      //   this.message=true;
      //  this.promoData.reset({ })
         this.router.navigateByUrl("listepromo");

      })
    })
  }
  // removeMessage(){
  //   this.message=false;
  // }


}