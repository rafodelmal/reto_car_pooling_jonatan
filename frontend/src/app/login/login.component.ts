import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/User';
import Swal from 'sweetalert2';
import { EventEmitter } from 'events';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { CommunicationService } from 'app/shared/services/communication.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username:string;
  password:string;
  rol:string;
  respuesta:User;
 

  constructor(private router: Router,private AuthenticationService:AuthenticationService,private CommunicationService:CommunicationService, ) { }

 
  ngOnInit() {
    this.CommunicationService.enviarMensajeObservable.subscribe(response => {
      this.username = response;
    });
  }

  cambioTexto(username: string) {
    this.CommunicationService.enviarMensaje(username);
  }

  checkLogin() {

   

    let username=this.username;
    let password=this.password;
    let rol=this.rol;

    this.AuthenticationService.authenticate(username,password,rol).subscribe(data=>{
  
      if(data===null){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password or username are invalid!'
        });
      }else{
      this.respuesta= new User(data);

      if (this.rol==='1'){

      this.CommunicationService.enviarMensaje(username);
      this.router.navigate(['/user']);
      Swal.fire({
        icon: 'success',
        title: 'Welcome',
        showConfirmButton: false,
        timer: 2500,
      });
      }else if(this.rol==='0'){

        this.CommunicationService.enviarMensaje(username);
        this.router.navigate(['/carpool']);
        Swal.fire({
          icon: 'success',
          title: 'Welcome',
          showConfirmButton: false,
          timer: 2500,
        });

      }

      }
        
    });
  }
 


  IrRegUsuario(){
    this.router.navigate(['/newUser'])
  }
  IrRegCarpool(){
    this.router.navigate(['/newCarpool'])
  }
 
}
 
 

