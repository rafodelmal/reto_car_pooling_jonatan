import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/services/authentication.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username:string;
  password:string;
  invalidLogin = false
 
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }
 
  ngOnInit() {
  }
 
  checkLoginUser() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
 
  checkLoginCarpool() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
 
  IrRegUsuario(){
    this.router.navigate(['/newUser'])
  }
  IrRegCarpool(){
    this.router.navigate(['/newCarpool'])
  }
 
}
 
 

