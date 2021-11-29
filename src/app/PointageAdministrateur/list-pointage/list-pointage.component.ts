import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-list-pointage',
  templateUrl: './list-pointage.component.html',
  styleUrls: ['./list-pointage.component.css']
})
export class ListPointageComponent implements OnInit {
  listPointage:any =[];
 pointage : any;
  date : any;
  constructor(
    private serviceAdmin: UsersService,
    private datepipe: DatePipe
    
    ) { }

  ngOnInit(): void {
   
    console.log(this.listPointage);
  }
  listerPointage(){
    this.serviceAdmin.AllPointageAdmin().subscribe((data)=>{
      return this.listPointage=data;
    })
  }

listJour(date:any){
this.serviceAdmin.listParJour(date).subscribe((result)=>
{ 
  return this.listPointage=result;


})
}
listSemaine(date:any){
  this.serviceAdmin.listParSemaine(date).subscribe((result)=>
  { 
    return this.listPointage=result;
  
  
  })
  }
  listMois(date:any){
    //this.date =this.datepipe.transform(this.date, 'yyyy-MM');
    this.serviceAdmin.listParMois(date).subscribe((result)=>
    { console.log(this.date);
      return this.listPointage=result;
    
    
    })
    }



}