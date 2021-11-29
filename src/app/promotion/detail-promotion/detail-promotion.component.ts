import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detail-promotion',
  templateUrl: './detail-promotion.component.html',
  styleUrls: ['./detail-promotion.component.css']
})
export class DetailPromotionComponent implements OnInit {
  detailPromotion: any;
  id: any;
  constructor(
    public service: UsersService,
     public route : ActivatedRoute) { }

     ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.service.detailPromotion(this.id).subscribe(data=>{
        this.detailPromotion = data;
        console.log(data);
      })
    }
  

}
