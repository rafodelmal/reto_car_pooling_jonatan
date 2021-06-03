import { Component, OnInit } from '@angular/core';
import { CarpoolService } from 'app/shared/services/carpool.service';

declare var $:any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  title = 'geolocation';
  public latitude;
  public longitude;

  constructor(public service:CarpoolService) { }

  ngOnInit(){
    this.getLocation()
    }
  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      var color = Math.floor((Math.random() * 4) + 1);
      $.notify({
          icon: "pe-7s-gift",
          message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
      },{
          type: type[color],
          timer: 1000,
          placement: {
              from: from,
              align: align
          }
      });
  }

  getLocation() {
    this.service.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
    });
}
}
