import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-listelog',
  templateUrl: './listelog.component.html',
  styleUrls: ['./listelog.component.css']
})
export class ListelogComponent implements OnInit {

  listlogs : any

  constructor(private service : UsersService) { }

  ngOnInit(): void {
    this.listelog();
  }
  listelog(){
    this.service.getAlllog().subscribe((data)=>{
      this.listlogs = data;
      console.log(data)
    })
  }
}
