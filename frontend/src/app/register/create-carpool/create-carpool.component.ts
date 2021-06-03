import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNew } from 'app/model/UserNew';
import { CarpoolService } from 'app/shared/services/carpool.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-carpool',
  templateUrl: './create-carpool.component.html',
  styleUrls: ['./create-carpool.component.css']
})
export class CreateCarpoolComponent implements OnInit {

username:any
password:any
phone: any
rol:any
placa:any

  constructor(private router: Router,private service:CarpoolService ) { }

  ngOnInit() {
  }



createCarpool() {

    let username=this.username;
    let password=this.password;
    let phone=this.phone;
    let rol='0';
    let placa=this.placa;

    let userNew = new UserNew(username, password,phone,rol,placa)
    

    this.service.saveCarpool(userNew).subscribe(data=>{
    console.log(data);
    
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['']);
   
    

  },error=>Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Password or username are invalid!'
  })
  
  
  );

}





}
