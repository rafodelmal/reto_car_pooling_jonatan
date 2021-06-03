import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from 'app/model/Reserva';
import { User } from 'app/model/User';
import { CarpoolService } from 'app/shared/services/carpool.service';
import { CommunicationService } from 'app/shared/services/communication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() nameCarpool: any;

  users:User[];
  reservas:Reserva[];

    username2: string;

  constructor(private service:CarpoolService,private CommunicationService:CommunicationService) { }

  ngOnInit() {
console.log('entra')
    this.CommunicationService.enviarMensajeObservable.subscribe(response => {
      this.username2 = response;
      console.log(this.username2)
      this.service.getReserva(this.username2)
    .subscribe(data=>{
      console.log(data);
      this.reservas=data;
    })
    });



  


    
  }

  EditTour() {

  }

}
