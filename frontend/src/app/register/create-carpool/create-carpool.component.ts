import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/User';
import { CarpoolService } from 'app/shared/services/carpool.service';

@Component({
  selector: 'app-create-carpool',
  templateUrl: './create-carpool.component.html',
  styleUrls: ['./create-carpool.component.css']
})
export class CreateCarpoolComponent implements OnInit {

  username:string;
  password:string;


  constructor(private service:CarpoolService ) { }

  ngOnInit() {
  }



createCarpool() {

    let username=this.username;
    let password=this.password;

    let user = new User(password, username)

    this.service.saveCarpool(user).subscribe(data=>{
      console.log(data);

  },error=>alert(error));

}



}
