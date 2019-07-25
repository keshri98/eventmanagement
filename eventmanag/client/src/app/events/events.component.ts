import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
arr;
//name

  constructor(private us:UsersService) { }
  

  ngOnInit() {
    this.getData();
  }
getData(){
  this.us.getData().subscribe(data=>{this.arr=data;});
}
delData(id){
  this.us.delData(id);
}
}
