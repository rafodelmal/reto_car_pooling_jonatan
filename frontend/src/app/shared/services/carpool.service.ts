import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'app/model/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarpoolService {

  constructor(private http:HttpClient) { }

 

  getUsuario(){

    return this.http.get<User[]>('http://localhost:8080/read');

 
  }

saveCarpool(user: User) : Observable <any> {

const headers = { 'content-type': 'application/json'};
const body =JSON.stringify(user);

return this.http.post('http://localhost:8080/create',body,{'headers':headers});


  }


}