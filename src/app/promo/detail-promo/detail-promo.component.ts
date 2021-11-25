import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detail-promo',
  templateUrl: './detail-promo.component.html',
  styleUrls: ['./detail-promo.component.css']
})
export class DetailPromoComponent implements OnInit {
  promoData: any;
  user: any;
  id: any;
  constructor(private service: UsersService,public  route: ActivatedRoute, public router: Router) { }

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
        this.router.navigateByUrl("listPromos");

      })
    })
  }

}
