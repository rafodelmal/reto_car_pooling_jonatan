import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNew } from 'app/model/UserNew';
import { CarpoolService } from 'app/shared/services/carpool.service';
import { UserService } from 'app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  username:any
  password:any
  phone: any
  rol:any
  placa:any
  
    constructor(private router: Router,private service:UserService ) { }
  
    ngOnInit() {
    }
  
  
  
  createUser() {
  
      let username=this.username;
      let password=this.password;
      let phone=this.phone;
      let rol='1';
      let placa=null;
  
      let userNew = new UserNew(username, password,phone,rol,placa)
      
  
      this.service.saveUser(userNew).subscribe(data=>{
      console.log(data);
      
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/']);
     
      
  
    },error=>Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Password or username are invalid!'
    })
    
    
    );
  
  }
  
  
  
  
  
  }