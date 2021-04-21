import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { User } from 'app/model/User';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username:string;
  password:string;
  invalidLogin = false;
  respuesta:User;
 
  //private loginservice: AuthenticationService
  constructor(private router: Router,private service:AuthenticationService ) { }
 
  ngOnInit() {
  }
 /* 
 if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['/user'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
*/

  checkLoginUser() {

    let username=this.username;
    let password=this.password;


    this.service.authenticate(username,password).subscribe(data=>{
      this.respuesta= new User(data);
      this.router.navigate(['/user']);
      this.invalidLogin = false;
  });
}
 
  checkLoginCarpool() {
    let username=this.username;
    let password=this.password;

    this.service.authenticate(username,password).subscribe(data=>{
      this.respuesta= new User(data);
      if(data=null){
        alert('el usuario no existe')
      }else{
        this.router.navigate(['/carpool']);
        this.invalidLogin = false;
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
 
 

