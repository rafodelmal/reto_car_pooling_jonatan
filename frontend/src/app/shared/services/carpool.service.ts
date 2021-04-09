import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserComponent} from 'app/user/user.component'

@Injectable({
  providedIn: 'root'
})
export class CarpoolService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/users';

  getUsuario(){

    return this.http.get<UserComponent[]>(this.Url);

  }
}
