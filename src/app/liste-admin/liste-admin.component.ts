import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.css']
})
export class ListeAdminComponent implements OnInit {

  constructor(private list:ServicesService) { }
  listData : any=[]
  ngOnInit(): void {
    this.list.getAllAdmin().subscribe((allData)=>{
      console.log (allData);
      return this.listData=allData;
    });

}
}
