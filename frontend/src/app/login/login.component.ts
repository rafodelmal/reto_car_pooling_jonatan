import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { User } from 'app/model/User';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username:string;
  password:string;
  respuesta:User;
 

  constructor(private router: Router,private service:AuthenticationService ) { }
 
  ngOnInit() {
  }

  checkLoginUser() {

    let username=this.username;
    let password=this.password;


    this.service.authenticate(username,password).subscribe(data=>{
      this.respuesta= new User(data);
      this.router.navigate(['/user']);
    
  });
}
 
  checkLoginCarpool() {
    let username=this.username;
    let password=this.password;

    this.service.authenticate(username,password).subscribe(data=>{
  
      if(data===null){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password or username are invalid!'
        });
      }else{
        this.router.navigate(['/carpool']);
      this.respuesta= new User(data);
     
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
 
 

