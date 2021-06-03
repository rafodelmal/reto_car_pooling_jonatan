import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {


  title = 'geolocation';
  public latitude;
  public longitude;

  constructor(public service:UserService) { }

  ngOnInit(){
    this.getLocation()
    }

  getLocation() {
    this.service.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
    });
}
}
