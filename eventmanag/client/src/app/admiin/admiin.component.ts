import { Component, OnInit } from '@angular/core';
import{ UsersService} from '../users.service';
  // import { from } from 'rxjs';

@Component({
  selector: 'app-admiin',
  templateUrl: './admiin.component.html',
  styleUrls: ['./admiin.component.css']
})
export class AdmiinComponent implements OnInit {

  name;
  email;
  password;
  address;
  city;
  image;

  constructor(private us:UsersService) { }

  ngOnInit() {
    
  }
  addData(){
    this.us.addData(this.name,this.email,this.address,this.password,this.city,this.image);
  }

}
