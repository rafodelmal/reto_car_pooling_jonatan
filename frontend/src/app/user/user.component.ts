import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { CarpoolService } from 'app/shared/services/carpool.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  users:User[];

  constructor(private service:CarpoolService) { }

  ngOnInit() {
    this.service.getUsuario()
    .subscribe(data=>{
      console.log(data);
      this.users=data;
    })
  }

}
